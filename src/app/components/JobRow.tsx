'use client'// This is a client component
import type { Job } from "@/models/Job";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TimeAgo from 'react-timeago'

export default function JobRow({jobDoc}:{jobDoc:Job}) {
    return (
        <>
            <div className="bg-white p-4 rounded-md shadow-md md:flex relative">
                <div className=" absolute cursor-pointer top-4 right-4">
                    <FontAwesomeIcon className="size-4 text-gray-300" icon={faHeart} />
                </div>
                <div className="flex grow gap-4">
                <div className="content-center">
                    <img className="size-12" src={jobDoc.jobIcon} alt="" />
                </div>
                <div className="grow sm:flex">
                    <div className="grow">
                        <div className="text-gray-500 text-sm">{jobDoc.orgName}</div>
                        <div className="font-bold text-lg mb-1">{jobDoc.title}</div>
                        <div className="text-gray-400 text-sm">
                            Remove &middot; {jobDoc.city}, {jobDoc.country} &middot; Full-time
                        </div>
                    </div>
                    {jobDoc.createdAt && (
                        <div className="content-end text-gray-500 text-sm">
                            <TimeAgo date={jobDoc.createdAt} />
                        </div>
                    )}
                </div>
                </div>
            </div>
        </>
    )
}