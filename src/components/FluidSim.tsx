import { ExternalForce, ImpulseType, Simulation, SimulationSettings } from '@red_j/webgl-fluid-sim';
import React, { useCallback, useEffect, useRef } from 'react';

interface FluidSimulationProps {
  width: number;
  height: number;
}

export const FluidSim = (props: FluidSimulationProps) => {
    const { width, height } = props;
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const simulationRef = useRef<Simulation | null>(null);
    const settingsRef = useRef<Partial<SimulationSettings>>({})
    const lastMousePos = useRef<[number, number] | null>(null);

    const updateSettings = useCallback((settings: Partial<SimulationSettings>) => {
        settingsRef.current = {...settingsRef.current, ...settings};
    }, []);

    const handlePointerEvent = useCallback((e: React.PointerEvent<HTMLCanvasElement>) => {
        if (!canvasRef.current) return;

        const rect = canvasRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = 1 - (e.clientY - rect.top) / rect.height; // Invert Y-axis

        if (e.type === 'pointerdown') {
            lastMousePos.current = [x, y];
            canvasRef.current.setPointerCapture(e.pointerId);
        } else if (e.type === 'pointermove' && lastMousePos.current) {
            const [lastX, lastY] = lastMousePos.current;
            const dx = x - lastX;
            const dy = y - lastY;
            const length = Math.sqrt(dx * dx + dy * dy);

            if (length > 0.001) { // Threshold to avoid tiny movements
                const force: ExternalForce = {
                    impulseDirection: [dx / length, dy / length],
                    impulsePosition: [x, y],
                    impulseRadius: 0.0001,
                    impulseMagnitude: length * 20, // Adjust multiplier as needed
                    impulseType: ImpulseType.GaussianSplat,
                };

                updateSettings({ externalForces: [force] });
                lastMousePos.current = [x, y];
            }
        } else if (e.type === 'pointerup' || e.type === 'pointerleave') {
            lastMousePos.current = null;
            if (canvasRef.current) {
                canvasRef.current.releasePointerCapture(e.pointerId);
            }
            updateSettings({ externalForces: [] });
        }
    }, [updateSettings]);

    useEffect(() => {
        if (canvasRef.current) {
        simulationRef.current = new Simulation(canvasRef.current, settingsRef.current);

        let animationFrameId: number;
        const render = () => {
            if (simulationRef.current) {
            simulationRef.current.updateSettings(settingsRef.current);
            simulationRef.current.step(1/60);
            }
            animationFrameId = requestAnimationFrame(render);
        };
        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
        }
    }, []);

    return (
        <canvas
            ref={canvasRef} 
            width={width}
            height={height}
            onPointerDown={handlePointerEvent}
            onPointerMove={handlePointerEvent}
            onPointerUp={handlePointerEvent}
            onPointerLeave={handlePointerEvent}
            style={{ touchAction: 'none' }}
        />
  );
};
