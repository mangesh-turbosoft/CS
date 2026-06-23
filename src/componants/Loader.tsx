'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Loader() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true)
      setTimeout(() => setVisible(false), 600)
    }, 1300)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-400"
      style={{
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.6s ease'
      }}
    >
      <div className="text-center">
        <label className="inline-block" style={{ animation: 'lol 1.6s infinite ease-in-out' }}>
          <Image src="/images/loader.svg" width={60} height={40} alt="" className="w-[60px]" />
        </label>
      </div>
    </div>
  )
}