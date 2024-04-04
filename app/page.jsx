import { connectDB } from "@/util/database.js"
import 이미지 from '/public/dogi.png';
import Image from "next/image";

export default async function Home() {
  // let client = await connectDB();
  // const db = client.db('forum');
  // let result = await db.collection('post').find().toArray();

  let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {/* <div className="food"> 
        <h4>{ 상품[0] } $40</h4>
      </div>
      <div className="food"> 
        <h4>{ 상품[1] } $40</h4>
      </div>
      <div className="food"> 
        <h4>{ 상품[2] } $40</h4>
      </div> */}
      {상품.map((product, idx) => {
        console.log(product);
        return (
          <h4 key={idx}>{product} $40</h4>
        )
      })}

      <Image src={이미지} alt="설명" />

    </div>
  )
}