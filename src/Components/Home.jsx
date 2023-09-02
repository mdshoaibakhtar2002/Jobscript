import MyCards from "./Cards";
import MyCarousel from "./Carousel";

export default function Home() {
  return (
    <div>
      <MyCarousel />
      <div className="all-cards">
        <MyCards />
        <MyCards />
        <MyCards />
        <MyCards />
      </div>
    </div>
  )
}
