
// import { useState } from 'react'
// import { StarIcon } from '@heroicons/react/20/solid'
// import { crops } from "../../../Data/crops";
// import { Radio, RadioGroup } from '@headlessui/react'
// import { Box, Button, Grid, LinearProgress, Rating } from "@mui/material";
// import ProductReviewCard from './ProductReview';

// import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
// import { useNavigate } from 'react-router-dom';
// const product = {
//   name: 'Basic Tee 6-Pack',
//   price: 'Rs.200.00',
//   href: '#',
//   breadcrumbs: [
//     { id: 1, name: 'Men', href: '#' },
//     { id: 2, name: 'Clothing', href: '#' },
//   ],
//   images: [
//     {
//       src: 'https://zenithbuzz.in/wp-content/uploads/2018/03/Foxtail-Millet-.jpg',
//       alt: 'Two each of gray, white, and black shirts laying flat.',
//     },
//     {
//       src: 'https://cpimg.tistatic.com/07663750/b/4/Quinoa-Seeds.jpg',
//       alt: 'Model wearing plain black basic tee.',
//     },
//     {
//       src: 'https://th.bing.com/th/id/OIP.roropRdm-KjxW3Ect95huwHaE8?w=1200&h=800&rs=1&pid=ImgDetMain',
//       alt: 'Model wearing plain gray basic tee.',
//     },
//     {
//       src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
//       alt: 'Model wearing plain white basic tee.',
//     },
//   ],
//   colors: [
//     { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
//     { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
//     { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
//   ],
//   sizes: [
  
//     { name: '1kg', inStock: true },
//     { name: '2kg', inStock: true },
//     { name: '5kg', inStock: true },
//     // { name: '2XL', inStock: true },
//     // { name: '3XL', inStock: true },
//   ],
//   description:
//     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   highlights: [
//     'Hand cut and sewn locally',
//     'Dyed with our proprietary colors',
//     'Pre-washed & pre-shrunk',
//     'Ultra-soft 100% cotton',
//   ],
//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// }
// const reviews = { href: '#', average: 4, totalCount: 117 }

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function ProductDetails() {
//   const [selectedColor, setSelectedColor] = useState(product.colors[0])
//   const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
//   const navigate=useNavigate()
//  const  handleAddtoCart=()=>{
//   navigate('/cart')
//  }

//   return (
//     <div className="bg-white">
//       <div className="pt-6">
//         <nav aria-label="Breadcrumb">
//           <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//             {product.breadcrumbs.map((breadcrumb) => (
//               <li key={breadcrumb.id}>
//                 <div className="flex items-center">
//                   <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
//                     {breadcrumb.name}
//                   </a>
//                   <svg
//                     width={16}
//                     height={20}
//                     viewBox="0 0 16 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                     className="h-5 w-4 text-gray-300"
//                   >
//                     <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
//                   </svg>
//                 </div>
//               </li>
//             ))}
//             <li className="text-sm">
//               <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
//                 {product.name}
//               </a>
//             </li>
//           </ol>
//         </nav>
// <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>

//         {/* Image gallery */}
//         <div className="flex flex-col items-center ">
//         <div className=" overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
//             <img
//               src={product.images[0].src}
//               alt={product.images[0].alt}
//               className="h-full w-full object-cover object-center"
//               />
//           </div>
//           <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
//             {/* <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
//               <img
//                 src={product.images[1].src}
//                 alt={product.images[1].alt}
//                 className="h-52 w-52 object-cover object-center"
//               />
//             </div> */}
//             <div className="flex flex-wrap space-x-5 justify-center">
//           {product.images.map((item)=>  <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
//               <img
//                 src={product.images[2].src}
//                 alt={product.images[2].alt}
//                 className="h-52  w-52 object-cover object-center"
//                 />
//             </div>)}
//             </div>
          
//           </div>
         

//         {/* Product info */}
//         </div>
//         <div className="lg:col-span-1 max-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
//           <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
//             <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
//           </div>

//           {/* Options */}
//           <div className="mt-4 lg:row-span-3 lg:mt-0">
//             <h2 className="sr-only">Product information</h2>
//             <p className="flex space-x-2 items-center text-lg lg:text-xl text-gray-900 mt-6">{product.price}</p>

//             {/* Reviews */}
//             <div className="mt-6">
//               <h3 className="sr-only">Reviews</h3>
//               <div className="flex items-center">
//                 <div className="flex items-center ">
//                   {[0, 1, 2, 3, 4].map((rating) => (
//                     <StarIcon
//                       key={rating}
//                       className={classNames(
//                           reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
//                         'h-5 w-5 flex-shrink-0'
//                     )}
//                     aria-hidden="true"
//                     />
//                 ))}
//                 </div>
//                 <p className="sr-only">{reviews.average} out of 5 stars</p>
//                 <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
//                   {reviews.totalCount} reviews
//                 </a>
//               </div>
//             </div>

//             <form className="mt-10">
//               {/* Colors */}
             

//               {/* Sizes */}
//               <div className="mt-10">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-sm font-medium text-gray-900">Select Quantity</h3>
               
//                 </div>

//                 <fieldset aria-label="Choose a size" className="mt-4">
//                   <RadioGroup
//                     value={selectedSize}
//                     onChange={setSelectedSize}
//                     className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
//                     >
//                     {product.sizes.map((size) => (
//                       <Radio
//                       key={size.name}
//                       value={size}
//                       disabled={!size.inStock}
//                       className={({ focus }) =>
//                         classNames(
//                             size.inStock
//                             ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
//                             : 'cursor-not-allowed bg-gray-50 text-gray-200',
//                             focus ? 'ring-2 ring-indigo-500' : '',
//                             'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
//                         )
//                     }
//                       >
//                         {({ checked, focus }) => (
//                             <>
//                             <span>{size.name}</span>
//                             {size.inStock ? (
//                                 <span
//                                 className={classNames(
//                                     checked ? 'border-indigo-500' : 'border-transparent',
//                                     focus ? 'border' : 'border-2',
//                                     'pointer-events-none absolute -inset-px rounded-md'
//                                 )}
//                                 aria-hidden="true"
//                               />
//                             ) : (
//                               <span
//                                 aria-hidden="true"
//                                 className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
//                                 >
//                                 <svg
//                                   className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
//                                   viewBox="0 0 100 100"
//                                   preserveAspectRatio="none"
//                                   stroke="currentColor"
//                                 >
//                                   <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
//                                 </svg>
//                               </span>
//                             )}
//                           </>
//                         )}
//                       </Radio>
//                     ))}
//                   </RadioGroup>
//                 </fieldset>
//               </div>

//               <Button
//                   variant="contained"
//                   onClick={handleAddtoCart}
//                   type="submit"
//                   sx={{ padding: ".8rem 2rem", marginTop: "2rem" }}
//                 >
//                   Add To Cart
//                 </Button>
//             </form>
//           </div>

//           <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
//             {/* Description and details */}
//             <div>
//               <h3 className="sr-only">Description</h3>

//               <div className="space-y-6">
//                 <p className="text-base text-gray-900">{product.description}</p>
//               </div>
//             </div>

//             <div className="mt-10">
//               <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

//               <div className="mt-4">
//                 <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
//                   {product.highlights.map((highlight) => (
//                     <li key={highlight} className="text-gray-400">
//                       <span className="text-gray-600">{highlight}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             <div className="mt-10">
//               <h2 className="text-sm font-medium text-gray-900">Details</h2>

//               <div className="mt-4 space-y-6">
//                 <p className="text-sm text-gray-600">{product.details}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//                   </section>
           
//                   <section className="pt-1">
//           <h1 className=" text-xl font-bold sm:col-span-3">Similar Products</h1>
//           <div className="flex flex-wrap space-y-5">
//             {crops.map((item) => (
//               <HomeSectionCard product={item} />
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }
