import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileIcon, FolderIcon } from "lucide-react";
import Link from "next/link";

export default function Files() {
  return (
    <div className="min-h-screen flex-1 overflow-auto">
      <div className="container mx-auto px-4 py-6 md:px-6">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Documents</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-slate-50">
                    Project Files
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40px]">
                    <FileIcon className="h-5 w-5" />
                  </TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden md:table-cell">Size</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Modified
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <FolderIcon className="h-5 w-5" />
                  </TableCell>
                  <TableCell>
                    <Link className="font-medium" href="#">
                      Bilder
                    </Link>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">-</TableCell>
                  <TableCell className="hidden md:table-cell">
                    May 9, 2023
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <FileIcon className="h-5 w-5" />
                  </TableCell>
                  <TableCell>
                    <Link className="font-medium" href="#">
                      project-plan.pdf
                    </Link>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    12.5 MB
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    May 7, 2023
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <FileIcon className="h-5 w-5" />
                  </TableCell>
                  <TableCell>
                    <Link className="font-medium" href="#">
                      budget-report.xlsx
                    </Link>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">4.2 MB</TableCell>
                  <TableCell className="hidden md:table-cell">
                    May 5, 2023
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <FileIcon className="h-5 w-5" />
                  </TableCell>
                  <TableCell>
                    <Link className="font-medium" href="#">
                      marketing-presentation.pptx
                    </Link>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    25.1 MB
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    May 3, 2023
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <FileIcon className="h-5 w-5" />
                  </TableCell>
                  <TableCell>
                    <Link className="font-medium" href="#">
                      employee-handbook.pdf
                    </Link>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">8.3 MB</TableCell>
                  <TableCell className="hidden md:table-cell">
                    April 28, 2023
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
