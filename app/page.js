"use client";
import { useState, useRef } from 'react';

export default function Wedding({ searchParams }) {
  // ចាប់យកឈ្មោះពី Link (ឧទាហរណ៍ ?name=ឈ្មោះភ្ញៀវ)
  const name = searchParams.name || "ភ្ញៀវកិត្តិយស";
  const [open, setOpen] = useState(false);
  const audioRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);
    if (audioRef.current) audioRef.current.play();
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #fff5f5, #fed7e1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Khmer OS Battambang, sans-serif', textAlign: 'center', padding: '20px' }}>
      
      {/* ហៅបទចម្រៀងដែលអ្នកបានប្តូរឈ្មោះមិញ (ត្រូវប្រាកដថាអក្ខរាវិរុទ្ធត្រូវ ១០០%) */}
      <audio ref={audioRef} loop>
        <source src="/ផាត់ជាយបណ្ដូលចិត្ត.m4a" type="audio/mp4" />
      </audio>

      {!open ? (
        <button onClick={handleOpen} style={{ padding: '20px 40px', fontSize: '1.2rem', backgroundColor: '#d4af37', color: 'white', border: 'none', borderRadius: '50px', cursor: 'pointer', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
          📩 ចុចបើកធៀបការអញ្ជើញ
        </button>
      ) : (
        <div style={{ animation: 'fadeIn 2s', border: '8px double #d4af37', padding: '50px 20px', borderRadius: '30px', backgroundColor: 'white', maxWidth: '450px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
          <p style={{ color: '#d4af37', fontSize: '1.2rem' }}>༺ សិរីសួស្តីជ័យមង្គល ༻</p>
          <h2 style={{ color: '#555', marginTop: '10px' }}>សូមគោរពអញ្ជើញ</h2>
          
          <h1 style={{ fontSize: '2.2rem', margin: '20px 0', color: '#b22222', fontWeight: 'bold' }}>
            {name}
          </h1>

          <p>ចូលរួមក្នុងពិធីមង្គលការនៃកូនប្រុសកូនស្រី</p>
          <h3 style={{ color: '#d4af37', fontSize: '1.4rem', margin: '15px 0' }}>សិក្សា ❤️️ ជាតា</h3>
          
          <div style={{ backgroundColor: '#fdf2f2', padding: '15px', borderRadius: '10px', margin: '20px 0' }}>
            <p style={{ fontWeight: 'bold' }}>ថ្ងៃសៅរ៍ ទី3 ខែ មេសា ឆ្នាំ២០២៦</p>
            <p>វេលាម៉ោង ៤:០០ រសៀល តទៅ</p>
          </div>

          <div style={{ fontSize: '40px' }}>🌸 🌹 🌼</div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
        }
        
