import reliabilityImg from 'public/reliability.jpg';
import Hero from '@/components/hero'

export default function ReliabilityPage() {
  return (
    <Hero 
      imageData={reliabilityImg} 
      imgAlt='welding' 
      title='Super high reliablity hosting' 
    />
  )

}
