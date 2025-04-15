// src/components/CareerHighlights.tsx
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import { career_1, career_2, career_3, career_4, career_5, career_6, career_7 } from '../assets'

const images = [
  {
    src: career_1,
    desc: 'From left to right: Dr. Amadi with Dr. Paschal Dozie (Diamond Bank), HRH Eze Godwin Okwuaka, and key officials during a 1991 Concorde Hotel PPCP visit.',
  },
  {
    src: career_2,
    desc: 'Dr. Adolphe Amadi, then Imo State Commissioner, welcomes President Ibrahim Babangida during the commissioning of the new Imo State House of Assembly, December 23, 1991.',
  },
  {
    src: career_3,
    desc: 'Dr. Adolphe Amadi in a one-on-one dialogue with Prof. Pat Utomi on advancing a homegrown, people-centered governance model for Nigeria.',
  },
  {
    src: career_4,
    desc: 'Students taught by Dr. Amadi at Cambrian College, Ontario (1975–1981)',
  },
  {
    src: career_5,
    desc: 'Students taught by Dr. Amadi at Cambrian College, Ontario (1975–1981)',
  },
  {
    src: career_6,
    desc: 'Students taught by Dr. Amadi at Cambrian College, Ontario (1975–1981)',
  },
  {
    src: career_7,
    desc: 'Students taught by Dr. Amadi at Cambrian College, Ontario (1975–1981)',
  },
  
]

const CareerHighlights = () => {
  const [pause, setPause] = useState(false)

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1.5,
      spacing: 15,
    },
    renderMode: 'performance',
    drag: true,
    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 2.5,
          spacing: 24,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 3,
          spacing: 30,
        },
      },
    },
    created(slider) {
        const interval = setInterval(() => {
          if (!pause) slider.next()
        }, 3000)
      
        slider.on('destroyed', () => clearInterval(interval))
      }
      
  })

  return (
    <section className="bg-white py-20 px-6 md:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Career Highlights
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-10 rounded" />

        <div
          ref={sliderRef}
          className="keen-slider"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="keen-slider__slide relative group overflow-hidden rounded-md shadow"
            >
              <img
                src={img.src}
                alt={img.desc}
                className="w-full h-64 object-cover transition duration-300 group-hover:brightness-75"
              />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-sm text-center py-2 opacity-0 group-hover:opacity-100 transition duration-300">
                {img.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default CareerHighlights;