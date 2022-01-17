import Discounts from "../molecule/atoms/discounts"
function Footer1 ()
{
    return (
        <>
            <div className="flex flex-col items-center justify-between lg:flex-row lg:items-start">
                <div className="flex flex-col items-center justify-center p-4 space-y-2 lg:items-start ">
                    <p className="text-sm text-gray-400">START WITH MORE</p>
                    <h4 className="text-2xl font-bold">Get discounts</h4>
                    <p className="text-center lg:text-left lg:w-72">We’ve partnered with the biggest design tools on the market to help you get started.</p>
                </div>
                <div className="flex flex-wrap  items-center justify-center">
                    <Discounts />
                    <Discounts />
                    <Discounts />
                    <Discounts />
                </div>
            </div>
        </>
    )
}
export default Footer1;