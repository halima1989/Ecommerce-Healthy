import { userType } from '@/utils/types'
import React from 'react'
import { MdOutlineMapsHomeWork } from 'react-icons/md'

const UserCard = ({ user }: { user: userType }) => {
    return (
        <div>
            <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F49917726%2Fretrieving-default-image-all-url-profile-picture-from-facebook-graph-api&psig=AOvVaw2I9PbGm51O7ChhinuLwN4x&ust=1721721754767000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDu-r-XuocDFQAAAAAdAAAAABAJ"
                alt="test"
                className="h-[270px] object-cover rounded-lg"
            />
            <h2 className="font-semibold">{user.name}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
                <span className="">email: </span>{user.email}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold"><MdOutlineMapsHomeWork /></span>{user.address}
            </p>
        </div>)
}

export default UserCard
