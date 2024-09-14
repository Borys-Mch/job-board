import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function JobsRow() {
    return (
        <>
            <div className="bg-white p-4 rounded-md shadow-md md:flex relative">
                <div className=" absolute cursor-pointer top-4 right-4">
                    <FontAwesomeIcon className="size-4 text-gray-300" icon={faHeart} />
                </div>
                <div className="flex grow gap-4">
                <div className="content-center">
                    <img className="size-12" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="" />
                </div>
                <div className="grow sm:flex">
                    <div className="grow">
                        <div className="text-gray-500 text-sm">Pinterest</div>
                        <div className="font-bold text-lg mb-1">FrontEnd</div>
                        <div className="text-gray-400 text-sm">
                            Remove &middot; New York, US &middot; Full-time
                        </div>
                    </div>
                    <div className="content-end text-gray-500 text-sm">
                        2 weeks
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}