import performaceImg from 'public/performance.jpg';
import Hero from '@/components/hero'

export default function PerformancePage() {
  return (
    <Hero 
      imageData={performaceImg} 
      imgAlt='welding' 
      title='We serve high performance apps' 
    />
  )

}
