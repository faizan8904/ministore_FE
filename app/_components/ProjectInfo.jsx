'use client'

import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import GlobalApi from '../_utils/GlobalApi';
import { CartContext } from '../_context/CartContext';
import Alert from './Alert';
import VideoAds from '../_adsense/VideoAds';

function ProjectInfo({ info, btnDisabled, btnDisabledBuy }) {
    const { user } = useUser();
    const router = useRouter();
    const { cart, setCart } = useContext(CartContext);

    const [showAlert, setShowAlert] = useState(false);
    const [showAd, setShowAd] = useState(false);
    const [downloadStarted, setDownloadStarted] = useState(false);

    const message = {
        title: "Add to cart success",
        msg: "You can now click on cart and process the order and checkout."
    };

    const onFreeDownload = async () => {
        if (info?.attributes?.isFree) {
            setShowAd(true);  // Show video ad
        } else {
            onAddToCartClick();
        }
    };

    const handleAdClose = async () => {
        setShowAd(false);  // Hide the ad after it's done
        if (!downloadStarted) {
            setDownloadStarted(true);  // Prevent multiple downloads
            console.log("downloading starting");
            
            const link = document.createElement('a');
            link.href = info?.attributes?.signedUrl;
            link.download = 'filename.pdf'; // You can set a default filename here
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            console.log("downloading Ended");

        }
    };

    const onAddToCartClick = () => {
        if (!user) {
            router.push('/sign-in');
            return;
        } else {
            const data = {
                data: {
                    userName: user.fullName,
                    email: user.primaryEmailAddress.emailAddress,
                    products: info?.id
                }
            };

            GlobalApi.addToCart(data)
                .then((res) => {
                    setShowAlert(true);
                    getUserCartItems_();
                })
                .catch((err) => console.log(err));
        }
    };

    const getUserCartItems_ = () => {
        GlobalApi.getUserCartItems(user?.primaryEmailAddress.emailAddress)
            .then(res => {
                setCart(res.data);
            });
    };

    return (
        <div className="flex flex-col md:flex-row bg-gray-900 p-2 md:p-8 text-white mt-10">
            {!showAd && (
                <div className="md:w-1/2 flex flex-col items-center">
                    <div className="relative flex w-full flex-col bg-bgDark bg-clip-border text-white shadow-lg">
                        <div className="relative md:mx-2 lg:mx-4 md:mt-4 h-[250px] lg:h-[380px] xl:h-[420px] overflow-hidden text-white shadow-lg bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 mb-10">
                            {info ? <Image
                                src={info?.attributes?.image?.data[0]?.url}
                                alt="banner"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-sm"
                            />
                                : <div className='h-full w-full bg-slate-500 animate-pulse'></div>}
                        </div>
                    </div>
                </div>
            )}
            {
                showAd && (
                    <VideoAds
                        dataAdSlot="5171566745"
                        onAdClose={handleAdClose}  // Trigger file download when the ad is closed
                    />
                )
            }
            {
                showAlert && (
                    <div role="alert" className="rounded-xl absolute top-5 left-1/2 transform -translate-x-1/2 border border-gray-100 bg-white p-4">
                        <div className='flex justify-end'>
                            <button onClick={() => setShowAlert(false)} className="text-gray-500 transition hover:text-gray-600">
                                <span className="sr-only">Dismiss popup</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <Alert message={message} />
                    </div>
                )
            }
            {
                info && !showAd && (
                    <div className="md:w-1/2 flex flex-col justify-center p-6">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">{info?.attributes?.title}</h2>
                        <p className="text-xl font-semibold mb-4">
                            <FontAwesomeIcon icon={faIndianRupee} className='h-5 w-5 mr-1 ' />
                            {info?.attributes?.price}
                        </p>
                        <div className="mb-4 md:p-6">
                            <button
                                className={`block w-full select-none rounded-lg py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-purple-800 transition-all hover:shadow-lg hover:shadow-button1 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${btnDisabled || btnDisabledBuy ? 'bg-gray-400' : 'bg-button1'}`}
                                type="button"
                                onClick={onFreeDownload}
                                disabled={!info?.attributes?.isFree && (btnDisabled)}
                            >
                                <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
                                {info?.attributes?.isFree ? "Download" : (btnDisabled ? "Already Added to Cart" : "Add to Cart")}
                            </button>
                        </div>
                        <p className='text-base mb-4'>Category : {info?.attributes?.Category}</p>
                        <p className="text-gray-200">{info?.attributes?.description}</p>
                    </div>
                )
            }
        </div>
    );
}

export default ProjectInfo;
