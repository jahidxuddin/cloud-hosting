/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XuAbwIBPPY1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import FileUpload from "@/components/fileUpload"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div key="1" className="flex h-screen">
      <div className="flex flex-col w-64 border-r">
        <div className="flex items-center justify-between border-b p-4">
          <MenuIcon className="h-6 w-6" />
        </div>
        <div className="flex flex-col p-4 space-y-2">
          <Button className="justify-start rounded-none text-left" variant="ghost">
            Files
          </Button>
          <Button className="justify-start rounded-none text-left" variant="ghost">
            Console
          </Button>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="flex flex-col space-y-4 p-4">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <Checkbox id="file1" />
                  <div className="flex-1 ml-2 cursor-pointer">Index.ts</div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <DotIcon className="h-6 w-6 cursor-pointer" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48">
                      <DropdownMenuItem>Open</DropdownMenuItem>
                      <DropdownMenuItem>Rename</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <Checkbox id="file2" />
                  <div className="flex-1 ml-2 cursor-pointer">Index.html</div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <DotIcon className="h-6 w-6 cursor-pointer" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48">
                      <DropdownMenuItem>Open</DropdownMenuItem>
                      <DropdownMenuItem>Rename</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <Checkbox id="file3" />
                  <div className="flex-1 ml-2 cursor-pointer">style.css</div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <DotIcon className="h-6 w-6 cursor-pointer" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48">
                      <DropdownMenuItem>Open</DropdownMenuItem>
                      <DropdownMenuItem>Rename</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
        <div className="flex items-center justify-end border-t p-2 space-x-2">
          <Button className="flex items-center" variant="ghost">
            <PlayIcon className="h-6 w-6 mr-2" />
            Start Server
          </Button>
          <Button className="flex items-center" variant="ghost">
            <SquareIcon className="h-6 w-6 mr-2" />
            Stop Server
          </Button>
        </div>
      </div>
    </div>
  )
}

function DotIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  )
}


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PlayIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}


function SquareIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  )
}