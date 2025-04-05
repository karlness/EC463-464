import React, { useEffect, useState } from 'react'

function App() {
  const [ultrasonic, setUltrasonic] = useState([])
  const [apiBase, setApiBase] = useState("http://10.0.0.92:5000/api") 
  // ^ Adjust IP as needed; or use relative paths if served from same domain

  useEffect(() => {
    // Fetch sensor data on mount, and optionally poll every few seconds
    const fetchSensors = async () => {
      try {
        const response = await fetch(`${apiBase}/sensors`)
        const data = await response.json()
        setUltrasonic(data.ultrasonic || [])
      } catch (err) {
        console.error(err)
      }
    }

    fetchSensors()
    const interval = setInterval(fetchSensors, 3000) // poll every 3s
    return () => clearInterval(interval)
  }, [apiBase])

  const sendMotorCmd = async (cmd) => {
    try {
      await fetch(`${apiBase}/motor_cmd`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cmd })
      })
      alert("Sent motor_cmd: " + cmd)
    } catch (err) {
      console.error(err)
      alert("Error sending motor_cmd")
    }
  }

  const handleStop = async () => {
    try {
      const response = await fetch(`${apiBase}/stop`, { method: 'POST' })
      const data = await response.json()
      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }

  const handleStart = async () => {
    try {
      const response = await fetch(`${apiBase}/start`, { method: 'POST' })
      const data = await response.json()
      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Pollux Robot Web Interface</h1>

      <section style={{ marginBottom: '1rem' }}>
        <h2>Sensor Data</h2>
        <p>Ultrasonic readings: {ultrasonic.join(', ')}</p>
      </section>

      <section style={{ marginBottom: '1rem' }}>
        <h2>Motor Control</h2>
        <button onClick={() => sendMotorCmd(0)}>Forward (cmd=0)</button>
        <button onClick={() => sendMotorCmd(1)}>Backward (cmd=1)</button>
        <button onClick={() => sendMotorCmd(6)}>Stop (cmd=6)</button>
      </section>

      <section style={{ marginBottom: '1rem' }}>
        <h2>Quick Start/Stop</h2>
        <button onClick={handleStart}>Start Robot</button>
        <button onClick={handleStop}>Stop Robot</button>
      </section>
    </div>
  )
}

export default App