import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center gap-y-8 bg-cream">
      <div className="w-[90%] h-fit md:w-2xl md:h-[450px] mx-auto rounded-2xl overflow-clip bg-white">
        <div className="w-full md:w-1/2 md:h-full float-left">
          <Image
            src="/images/image-product-desktop.jpg"
            alt="product"
            width={500}
            height={500}
            className="hidden md:block w-full h-full object-cover"
          />
          <Image 
            src="/images/image-product-mobile.jpg"
            alt="product"
            width={500}
            height={500}
            className="block md:hidden w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 md:h-full float-right p-6 flex flex-col justify-around gap-y-5">
          <p className="text-lg text-grey uppercase tracking-widest font-montserrat">
            Perfume
          </p>
          <h1 className="text-3xl md:text-4xl font-fraunces">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-sm text-grey font-montserrat">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div>
            <p className="pr-5 text-green-500 text-3xl font-fraunces inline-block w-fit">
              $149.99
            </p>
            <p className="inline-block w-fit font-montserrat text-grey line-through align-[4px]">
              $169.99
            </p>
          </div>

          <button className="bg-green-500 hover:bg-green-700 text-white py-3 rounded-lg">
            <Image
              src="/images/icon-cart.svg"
              alt="cart"
              width={16}
              height={16}
              className="inline-block mr-2"
            />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="attribution hidden md:block">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">ClairJDA</a>.
      </div>
    </div>
  );
}
