export default function BoxItem({image, title}) {
   return (
      <div className='p-5 '>
         <div>
            <img src={image} className='' alt='' />
         </div>
         <p className='text-2xl mt-5 text-right'>{title}</p>
         <p className=' text-gray-500 mt-5 text-right'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
      </div>
   );
}
