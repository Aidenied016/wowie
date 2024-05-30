import React from 'react';

import Link from "next/link";

import Nav from "./SideNav/Nav";
import Side from "./SideNav/Side";

import Image from "next/image";
import {
  ArrowUpRight,
  Barcode,
  CircleUser,
  Droplets,
  FileIcon,
  Inbox,
  Keyboard,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const menu2 = [
  "Dashboard",
  "Assets",
  "Activity",
  "Users",
  "Analytics",
  "CreateAssets",
  "CreateLicense",
  "CreateAccessories",
  "CreateConsumables",
  "CreateComponent",
  "Settings",
];
import Barchart from "@/app/analyticcomponent/barchart";

export function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col ">
      <Nav />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Side />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-1 md:grid-cols-2 md:gap-4 lg:grid-cols-6">
            <Card x-chunk="dashboard-01-chunk-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Assets</CardTitle>
                <Barcode className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <Button variant="link" className="text-xs">
                  View All
                </Button>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Licenses</CardTitle>
                <FileIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">34</div>
                <Button variant="link" className="text-xs">
                  View All
                </Button>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Accessories
                </CardTitle>
                <Keyboard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">56</div>
                <Button variant="link" className="text-xs">
                  View All
                </Button>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-3">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Consumables
                </CardTitle>
                <Droplets className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78</div>
                <Button variant="link" className="text-xs">
                  View All
                </Button>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-3">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Component</CardTitle>
                <Inbox className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">90</div>
                <Button variant="link" className="text-xs">
                  View All
                </Button>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-3">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <div>
                <div className="text-2xl font-bold pl-5">123</div>
                <a
                  href="/users"
                  className="pl-5 text-sm underline-offset-8 underline text-primary"
                >
                  View All
                </a>
              </div>
            </Card>
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>Activity</CardTitle>
                  <CardDescription>
                    Recent Activity from your Inventory
                  </CardDescription>
                </div>
                <Button
                  asChild
                  size="sm"
                  className="ml-auto gap-1 bg-yellow-300 text-neutral-950 "
                >
                  <Link href="/activity">
                    View All
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Item</TableHead>
                      <TableHead className="text-right">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Kent Escala</div>
                      </TableCell>
                      <TableCell>Asset</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="text-xs">
                          Approved
                        </Badge>
                      </TableCell>
                      <TableCell>Laptop</TableCell>
                      <TableCell className="text-right">06/05/2024</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Orville Montero</div>
                      </TableCell>
                      <TableCell>License</TableCell>
                      <TableCell>
                        <Badge className="text-xs" variant="destructive">
                          Declined
                        </Badge>
                      </TableCell>
                      <TableCell>Software</TableCell>
                      <TableCell className="text-right">05/05/2024</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Mecca Dagami</div>
                      </TableCell>
                      <TableCell>Asset</TableCell>
                      <TableCell>
                        <Badge className="text-xs" variant="destructive">
                          Declined
                        </Badge>
                      </TableCell>
                      <TableCell>PC</TableCell>
                      <TableCell className="text-right">04/05/2024</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Justin Tuazon</div>
                      </TableCell>
                      <TableCell>Consumables</TableCell>
                      <TableCell>
                        <Badge className="text-xs" variant="secondary">
                          Approved
                        </Badge>
                      </TableCell>
                      <TableCell>Licenses</TableCell>
                      <TableCell className="text-right">03/05/2024</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Micah Avance</div>
                      </TableCell>
                      <TableCell>Accessory</TableCell>
                      <TableCell>
                        <Badge className="text-xs" variant="destructive">
                          Declined
                        </Badge>
                      </TableCell>
                      <TableCell>Keyboard</TableCell>
                      <TableCell className="text-right">02/05/2024</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-5">
              <CardHeader>
                <CardTitle>Asset By Status</CardTitle>
              </CardHeader>
              <CardContent>
                <Barchart />
              </CardContent>
            </Card>
            <Card className="col-span-4" x-chunk="dashboard-01-chunk-4">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>Assets</CardTitle>
                  <CardDescription>
                    Recent Assets from your Inventory
                  </CardDescription>
                </div>
                <Button
                  asChild
                  size="sm"
                  className="ml-auto gap-1 bg-yellow-300 text-neutral-950"
                >
                  <Link href="/assets">
                    View All
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Added By</TableHead>
                      <TableHead>Model</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Serial</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead className="text-right">Submitted At</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Mecca Denise Dagami</div>
                      </TableCell>
                      <TableCell>Plantronics Headphones</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="text-xs">
                          Deployed
                        </Badge>
                      </TableCell>
                      <TableCell>KGH123GHJ</TableCell>
                      <TableCell>Headphones</TableCell>
                      <TableCell className="text-right">
                        2023-07-12 10:42 AM
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Orville Montero</div>
                      </TableCell>
                      <TableCell>Plantronic Headphones</TableCell>
                      <TableCell>
                        <Badge className="text-xs" variant="destructive">
                          Spare
                        </Badge>
                      </TableCell>
                      <TableCell>ASDJ23HKJD1324</TableCell>
                      <TableCell>Headphones</TableCell>
                      <TableCell className="text-right">
                        2023-10-18 03:21 PM
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Kile Santiago</div>
                      </TableCell>
                      <TableCell>Plantronic Headphones</TableCell>
                      <TableCell>
                        <Badge className="text-xs" variant="destructive">
                          Spare
                        </Badge>
                      </TableCell>
                      <TableCell>SHDKKJK123123</TableCell>
                      <TableCell>Headphones</TableCell>
                      <TableCell className="text-right">
                        SHDKKJK123123
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Kent Escala</div>
                      </TableCell>
                      <TableCell>Lenovo Thinkpad</TableCell>
                      <TableCell>
                        <Badge className="text-xs" variant="secondary">
                          Defective
                        </Badge>
                      </TableCell>
                      <TableCell>ASDKJASDKJ123567</TableCell>
                      <TableCell>Laptop</TableCell>
                      <TableCell className="text-right">
                        2023-12-25 11:59 PM
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Ash Ketchup</div>
                      </TableCell>
                      <TableCell>DELL Monitor</TableCell>
                      <TableCell>
                        <Badge className="text-xs" variant="destructive">
                          Spare
                        </Badge>
                      </TableCell>
                      <TableCell>ASHJKDK1234128</TableCell>
                      <TableCell>Monitor</TableCell>
                      <TableCell className="text-right">
                        2024-01-01 12:00 AM
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Coco Martin</div>
                      </TableCell>
                      <TableCell>Plantronic Headphones</TableCell>
                      <TableCell>
                        <Badge className="text-xs" variant="destructive">
                          Defective
                        </Badge>
                      </TableCell>
                      <TableCell>JLSDIKL123789</TableCell>
                      <TableCell>Headphones</TableCell>
                      <TableCell className="text-right">
                        2024-02-14 02:14 PM
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
