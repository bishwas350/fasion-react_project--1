

import Heading from './component/Heading';
import Container from './component/Container';
import Flex from './component/Flex';
import Image from './component/Image';
import Logo from './assets/Fresh.png';
import Menu from './component/Menu';
import Button from './component/Button';
import Banner from './assets/Group 2.png';
import juta from './assets/juta.png';
import pant from './assets/pant.png';
import swaeter from './assets/swaeter.png';
import Dhonggi from './assets/dhonggi.png';
import Sada from './assets/sada.png';
import { FaStar } from 'react-icons/fa';
import thang from './assets/thang.png'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* Header part start */}
      <div className="py-5 bg-primaryColor">
        <Container className={"max-w-7xl"}>
          <Flex className={'justify-between pt-16'}>
            <div className="">
              <Image src={Logo} alt={Logo}></Image>
            </div>
            <div className="pt-2">
              <Flex className={'gap-x-10 font-pop text-2xl font-semibold'}>
                <Menu mText={"Men"}></Menu>
                <Menu mText={"Women"}></Menu>
                <Menu mText={"Kids"}></Menu>
                <Menu mText={"Collection"}></Menu>
                <Menu mText={"Trends"}></Menu>
              </Flex>
            </div>
            <div className="flex gap-x-5">
              <Button btnText={'Login'} className={'px-[30px] py-[15px] border border-borderColor rounded-xl  hover:bg-borderColor font-pop text-2xl font-semibold shadow-md	'}></Button>
              <Button btnText={'Signup'} className={'px-[30px] py-[15px] border border-borderColor rounded-xl hover:bg-borderColor font-pop text-2xl font-semibold shadow-md'}></Button>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Header part End */}
      {/* Banner part start  */}
      <div className="py-[150px]  bg-primaryColor">
        <Container className={'max-w-6xl '}>
          <Flex>
            <div className="w-1/2">
              <Heading text={"Find The Best Fashion Style For You"} as={"h1"} className={"font-pop text-[64px] font-semibold pr-[115px]"}></Heading>
              <Heading text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra."} as={"p"} className={"font-pop text-[24px] pr-[95px] my-[40px]"}></Heading>
              <Button btnText={"Shop Now"} className={"px-[30px] py-[15px] bg-black rounded-md   font-pop text-2xl text-white"}></Button>
            </div>
            <div className="w-1/2">
              <img src={Banner} alt={Banner} />
            </div>
          </Flex>
        </Container>
      </div>
      {/* Banner part end  */}

      {/* New Collection part start */}
      <div className={" pt-28"}>
        <Container className={"max-w-6xl"} >
          <div className="">
            <Heading text={"New Collection"} as={"h1"} className={"text-[64px] font-frank font-bold text-center"} />
          </div>
          <Flex className={'space-x-10 py-20 items-center'}>
            <div className=" relative">
              <Image src={swaeter} className={''} />
              <Heading text={"Baskets"} as={'p'} className={'font-pop text-[24px] text-center bg-white px-24 py-5 rounded-xl absolute bottom-10 left-1/2 -translate-x-1/2'} />
            </div>
            <div className=" relative">
              <Image src={pant} className={''} />
              <Heading text={"Baskets"} as={'p'} className={'font-pop text-[24px] text-center bg-white px-24 py-5 rounded-xl absolute bottom-10 left-1/2 -translate-x-1/2'} />
            </div>
            <div className=" relative">
              <Image src={juta} className={''} />
              <Heading text={"Baskets"} as={'p'} className={'font-pop text-[24px] text-center bg-white px-24 py-5 rounded-xl absolute bottom-10 left-[30%] -translate-x-1/2'} />
            </div>

          </Flex>
        </Container>
      </div>
      {/* New collection part end  */}

      {/* Dhonggi part start */}
      <div className="pt-28 mb-80">
        <Container className={'max-w-6xl '}>
          <Flex className={'justify-between items-center space-x-28'}>
            <div className="">
              <Image src={Dhonggi} />
            </div>
            <div className="relative font-pop font-semibold text-2xl ">
              <Heading text={'Best Fashion Since 2010'} as={'h1'} className={'font-frank font-bold text-6xl max-w-md mb-10 leading-normal'} />

              <Heading text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. '} as={'p'} className={'max-w-md mb-36'} />

              <div className="py-16 rounded-[20px] bg-counterBg-0 adsolute left-[-500px] z-[-1] px-2">
                <Flex>
                <div className="border-r-2 border-black px-8">
                    <Heading className={'font-podd font-bold text-6xl'} as={'p'} text={'2020'} />
                    <Heading text={'Founded'} as={'p'} className={'font-medium text-3xl font-pop'} />
                  </div>
                  <div className="border-r-2 border-black px-8">
                    <Heading text={'5000+'} as={'p'} className={'font-podd font-bold text-6xl'} />
                    <Heading text={'Product Sold'} className={'font-medium text-2xl'} as={'p'} />
                  </div>
                  <div className="px-8">
                    <Heading text={'4500+'} as={'p'} className={'font-podd font-bold text-6xl'} />
                    <Heading text={'Best Reviews'} className={'font-medium text-2xl'} as={'p'} />
                  </div>
                </Flex>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Dhonggi part End */}

      <div className="bg-lastColor pb-28 bg-0">
        <Container className={"max-w-6xl pt-12"}>
          <Flex className={"items-center gap-x-12"}>
            <div className="text-white font-frank font-bold text-2xl">
              <Heading as={'h3'} text={'Best Fashion Since 2010'} className={'text-6xl max-w-md mb-8 leading-normal'} />
              <Heading as={'p'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus.'} className={'max-w-md mb-10'} />
              <Button btnText={"Learn MORE"} className={"bg-black py-5 px-16 rounded-lg  text-white font-pop"} />
            </div>
            <div className="">
              <Flex className={"gap-10"}>
                <div className="">
                  <Image src={Sada} />
                  <div className="bg-white font-pop p-4 ">
                    <Flex className={"text-starColor-0 mb-2 space-x-4"}>

                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </Flex>
                    <Heading as={'p'} text={'Sweater Shirt'} className={'font-pop font-semibold texr-[22px] '} /><span className={'text-2xl text-priceColor'}>
                      $45.99
                    </span>
                    <span className={'text-2xl ml-8'}>$35.99</span>
                  </div>
                </div>
                <div className="">
                  <Image src={thang} />
                  <div className="bg-white font-pop p-4 ">
                    <Flex className={"text-starColor-0 mb-2 space-x-4"}>

                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </Flex>
                    <Heading as={'p'} text={'Pants fashion'} className={'font-pop font-semibold texr-[22px] '} /><span className={'text-2xl text-priceColor'}>
                      $45.99
                    </span>
                    <span className={'text-2xl ml-8'}>$35.99</span>
                  </div>
                </div>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  )
}

export default App



