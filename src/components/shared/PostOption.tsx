import { Bookmark, Ellipsis, FilePenLine } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import DeleteAlert from "./DeleteAlert"

type Props = {
    Click:()=>void
}

const PostOption = ({Click}:Props) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
            <Ellipsis className="text-primary-iconColor w-6 h-6"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary-primarybackground border-primary-iconColor text-white w-[200px]">
                <DropdownMenuItem className=" focus:bg-primary-secondarybackground focus:text-primary-primaryText">
                    <div className="flex justify-between w-full">
                        <span className="text-[16px]">Save</span>
                        <Bookmark className="text-white w-6 h-6" />
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem className=" focus:bg-primary-secondarybackground focus:text-primary-primaryText">
                    <div className="w-full flex justify-between">
                        <span className="text-[16px]">Edit Post</span>
                        <FilePenLine className="text-white w-6 h-6" />
                    </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-primary-iconColor" />
                <DropdownMenuItem className=" focus:bg-primary-secondarybackground focus:text-primary-primaryText" asChild>
                   <DeleteAlert Click={Click}/>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default PostOption