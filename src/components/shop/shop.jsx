import "./shop.css"
import "."

// const Shop = () => {
//     return (
//       <div className="master-master">
        // <div className="box">
        //   <img
        //     className="img-1"
        //     src="https://media.istockphoto.com/id/1138045738/photo/exercise-mat-with-weights-fitness-ball-and-water-bottle-3d.jpg?s=612x612&w=0&k=20&c=pK_eyqkspJcTnOP_ol0jd4p7pjHdVIUVbbyB9t1MyaY="
        //     alt=" Weight ball"
        //   />
        //   <p className="content-5">Workout Mat</p>
        //   <p className="content-5"> Type : Polyester</p>
        //   <p className="content-5">PRICE: $10</p>
        //   <div className="bottom-5">
        //     <button className="btn-1"> + ADD TO CART</button>
        //   </div>
        // </div>

//         <div className="box">
//           <img
//             className="img-1"
//             src="https://media.istockphoto.com/id/1391410249/photo/sports-and-gym-activities.jpg?s=612x612&w=0&k=20&c=1S-hAmT-CkRtdYV_hcKi1lZdQkXAN_mCy3ebIXlUEnE="
//             alt=" Weight ball"
//           />
//           <p className="content-5">Kettle Bell Thumble</p>
//           <p className="content-5"> WEIGHT: 5 Kgs</p>
//           <p className="content-5">PRICE: $19</p>
//           <div className="bottom-5">
//             <button className="btn-1"> + ADD TO CART</button>
//           </div>
//         </div>
//         <div className="box">
//           <img
//             className="img-1"
//             src="https://media.istockphoto.com/id/625739874/photo/heavy-weight-exercise.jpg?s=612x612&w=0&k=20&c=B1uzJW1DBei2Rx5hnt139tt9dt3L7TbKrpgwbMR-LrI="
//             alt=" Weight ball"
//           />
//           <p className="content-5">Kettle Bell Thumble</p>
//           <p className="content-5"> WEIGHT: 15 Kgs</p>
//           <p className="content-5">PRICE: $99</p>
//           <div className="bottom-5">
//             <button className="btn-1"> + ADD TO CART</button>
//           </div>
//         </div>
//         <div className="box">
//           <img
//             className="img-1"
//             src="https://media.istockphoto.com/id/503467544/photo/barbell.jpg?s=612x612&w=0&k=20&c=3djgL5iO3fvxMv2w68S5eBnQXcpq8wqwmFOyhnPThUg="
//             alt=" Weight ball"
//           />
//           <p className="content-5">Kettle Bell Thumble</p>
//           <p className="content-5"> WEIGHT: 2 - 20 Kgs</p>
//           <p className="content-5">PRICE: $199</p>
//           <div className="bottom-5">
//             <button className="btn-1"> + ADD TO CART</button>
//           </div>
//         </div>
//         <div className="box">
//           <img
//             className="img-1"
//             src="https://media.istockphoto.com/id/503467544/photo/barbell.jpg?s=612x612&w=0&k=20&c=3djgL5iO3fvxMv2w68S5eBnQXcpq8wqwmFOyhnPThUg="
//             alt=" Weight ball"
//           />
//           <p className="content-5">Kettle Bell Thumble</p>
//           <p className="content-5"> WEIGHT: 5 - 30Kgs</p>
//           <p className="content-5">PRICE: $299</p>
//           <div className="bottom-5">
//             <button className="btn-1"> + ADD TO CART</button>
//           </div>
//         </div>
//         <div className="box">
//           <img
//             className="img-1"
//             src="https://media.istockphoto.com/id/637978400/photo/modern-gym-interior-with-equipment-fitness-exercise-bikes.jpg?s=612x612&w=0&k=20&c=HZxVAuyX7rzI-jYCOCZqFPKkdaSNAScnQZzFCwBzOrs="
//             alt=" Weight ball"
//           />
//           <p className="content-5">Metor Sport Cycle</p>
//           <p className="content-5"> Type : Stainless Steel</p>
//           <p className="content-5">PRICE: $399</p>
//           <div className="bottom-5">
//             <button className="btn-1"> + ADD TO CART</button>
//           </div>
//         </div>
//         <div className="box">
//           <img
//             className="img-1"
//             src="https://media.istockphoto.com/id/185097876/photo/treadmill.jpg?s=612x612&w=0&k=20&c=gndW2QG1T5v5I0U5hRTiF3-Yw-yIzB9yOUVu74CVIls="
//             alt=" Weight ball"
//           />
//           <p className="content-5">Metor Thread Mill</p>
//           <p className="content-5"> Type : Electric</p>
//           <p className="content-5">PRICE: $339</p>
//           <div className="bottom-5">
//             <button className="btn-1"> + ADD TO CART</button>
//           </div>
//         </div>
//         <div className="box">
//           <img
//             className="img-1"
//             src="https://media.istockphoto.com/id/622918790/photo/leg-press-exercise.jpg?s=612x612&w=0&k=20&c=3vhXjhHdTQP2k6t4y3q6V4zzn7S_5c7dbQSHj7cicoU="
//             alt=" Weight ball"
//           />
//           <p className="content-5">MFP Leg Press</p>
//           <p className="content-5"> WEIGHT:Max 500 Kgs</p>
//           <p className="content-5">PRICE: $459</p>
//           <div className="bottom-5">
//             <button className="btn-1"> + ADD TO CART</button>
//           </div>
//         </div>
//         {/* <div className="box">
//           <img
//             className="img-1"
//             src="https://media.istockphoto.com/id/1375037561/photo/home-gym-with-barbell-dumbbells-exercise-bike-and-other-sports-equipments.jpg?s=612x612&w=0&k=20&c=W7V7g2AmPa6Xdk0CcXoVqUOuRQ484RZXMXVlKduDokk="
//             alt=" Weight ball"
//           />
//           <p className="content-5">Kettle Bell Kings</p>
//           <p className="content-5"> WEIGHT: 5 Kgs</p>
//           <p className="content-5">PRICE: $499</p>
//           <div className="bottom-5">
//             <button className="btn-1"> + ADD TO CART</button>
//           </div>
//         </div> */}
//         {/* <div className="box">
//           <img
//             className="img-1"
//             src="https://media.istockphoto.com/id/596568573/photo/man-working-out-on-exercise-bike-at-home.jpg?s=612x612&w=0&k=20&c=58sweS5wOfH7lIL5QjNz7Q9n465LmQVDtWtrab7_J10="
//             alt=" Weight ball"
//           />
//           <p className="content-5">Kettle Bell Kings</p>
//           <p className="content-5"> WEIGHT: 5 Kgs</p>
//           <p className="content-5">PRICE: $499</p>
//           <div className="bottom-5">
//             <button className="btn-1"> + ADD TO CART</button>
//           </div>
//         </div> */}
//       </div>
//     );
// }

const Shop = () => {
  const Item = (props) => {
    return (
      <div className="box">
        <img
          className="img-1"
          src="https://media.istockphoto.com/id/1138045738/photo/exercise-mat-with-weights-fitness-ball-and-water-bottle-3d.jpg?s=612x612&w=0&k=20&c=pK_eyqkspJcTnOP_ol0jd4p7pjHdVIUVbbyB9t1MyaY="
          alt=" Weight ball"
        />
        <p className="content-5">Workout Mat</p>
        <p className="content-5"> Type : Polyester</p>
        <p className="content-5">PRICE: $10</p>
        <div className="bottom-5">
          <button className="btn-1"> + ADD TO CART</button>
        </div>
      </div>
    );
  };
  return (
    // <div>
    //   <div>
    //     {/* <h2 className="text-black text-xl font-semibold flex mr-4">Shirts</h2> */}
    //   </div>

      <div className="shop ">
        {Shop.map((item, id) => {
          return (
            <Item
              key={id}
              id={item.id}
              name={item.name}
              price={item.price}
              // size={item.size}
              image={item.imgUrl}
            />
          );
        })}
      </div>
    // </div>
  );
};

export default Shop ;