import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { AiTwotoneSetting } from 'react-icons/ai';
import { FaSearchDollar } from 'react-icons/fa';
import { BsArrowRightShort, BsFillDice4Fill, BsChevronDown } from 'react-icons/bs';
import { CgArrowsExchangeAltV } from 'react-icons/cg';
import { IoIosStats } from 'react-icons/io';
import { GrDocument } from 'react-icons/gr';
import { HiOutlineFingerPrint } from 'react-icons/hi';
import { GrFormRefresh } from 'react-icons/gr';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Jupiter Aggregator</title>
        <meta name="description" content="Jupiter: The best swap aggregator on Solana.  Built for smart traders who like money." />
        <meta name="author" content="Nitish Jha" />
        <meta name="keywords" content="Jupitor, crypto, trading " />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <div>
          {/* nav menu */}
          <nav className='flex justify-between flex-wrap px-4 py-4  items-center'>
            <div className='flex  text-center content-center'>
              <Link href={'/'}><a><Image width={36} height={'36'} src="/jupiter-logo.svg" alt="jupiter-logo" className='absolute top-10 ' /></a></Link>
              <Link href={'/'}><a><span className="ml-3 font-bold text-2xl">Jupiter</span></a></Link>
            </div>
            <div className=''>
              <ul className='flex'>
                <li className='flex content-center m-4 text-slate-400 font-semibold cursor-pointer hover:text-black'><CgArrowsExchangeAltV className='text-xl mx-1' />Trade</li>
                <li className='flex content-center m-4 text-slate-400 font-semibold cursor-pointer hover:text-black'><HiOutlineFingerPrint className='text-xl mx-1' />Infra</li>
                <li className='flex content-center m-4 text-slate-400 font-semibold cursor-pointer hover:text-black'><GrDocument className='text-xl mx-1' />Docs</li>
                <li className='flex content-center m-4 text-slate-400 font-semibold cursor-pointer hover:text-black'><IoIosStats className='text-xl mx-1' />Stats</li>
                <li className='flex content-center m-4 text-slate-400 font-semibold cursor-pointer hover:text-black'><BsFillDice4Fill className='text-xl mx-1' />More<BsChevronDown className='text-xl mx-1'/></li>
              </ul>
            </div>
            <div className='flex'>
              <button><div className='border-2 mx-4 px-4 rounded-xl shadow-md'>
              <AiTwotoneSetting className='items-center m-5' />
              </div></button>
              <button><span className='bg-black rounded-xl text-white py-4 px-4'>Connect Wallet</span></button>
            </div>
          </nav>
          {/* nav end */}

          <div className='flex justify-center mt-8'>
            <div className='flex shadow-xl border- mx-5 rounded-2xl'>
              <FaSearchDollar className='self-center m-2 text-3xl' />
              <input className='py-3 w-full px-10' type="text" placeholder='You can try “10 GST to USDC' />
            </div>
          </div>
          <div className='text-center mt-11'>
            <div className='text-2xl font-bold'>
              <span className=''>For</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgba(252,192,10,1)] to-[rgba(78,186,233,1)] dark:bg-200-auto dark:bg-jupiter-gradient-alternative animate-hue dark:animate-shine "> smart traders</span>
              <div>who like money</div>
            </div>
            <button className='inline text-sm text-gray-500 '>The JUP Promise<BsArrowRightShort className='inline' /></button>
          </div>

          <div className=' w-4/12 m-auto mt-11'>
            <div className='flex justify-end' ><GrFormRefresh className='text-2xl bg-slate-100 m-1 rounded-full' /></div>
            <div className='border-2 rounded-xl p-7'>
              <div className='flex flex-col justify-center'>
                <div className='font-semibold text-sm'>
                  <span>You pay</span>
                </div>
                <div className='flex justify-between p-5 border-2 bg-slate-100 items-center '>
                  <div className='flex items-center hover:bg-white p-4 rounded-xl'>
                    <Image width={'30'} height={'30'} src="/logo.webp" alt="jupiter-logo" className='rounded-full' />
                    <button className='font-bold cursor-pointer'>SOL </button><BsChevronDown/>

                  </div>
                  <input type="number" name="" id="" placeholder='0.00' className='p-2' />
                </div>
                <div className='self-center text-3xl bg-slate-200 rounded-full m-4 '>
                  <CgArrowsExchangeAltV />
                </div>
                
                <div className='font-semibold text-sm'>
                <span>You receive</span>
                </div>
                <div className='flex justify-between'>
                  <button>USDC</button>
                  <input type="number" name="" id="" placeholder='0.00' className='' />
                </div>
              </div>
            </div>
            <div className='bg-gray-900 text-white text-center py-4 mt-10 rounded-xl'>
              Connect Wallet
            </div>
          </div>
        </div>
        {/* footer */}
        <div className='w-full text-center mt-9 text-slate-400 text-sm bg-gray-100' >
          Jupiter: The Key Liquidity Aggregator and Swap Infrastructure for Solana
        </div>
        {/* footer end */}
      </div>
    </div>
  )
}
