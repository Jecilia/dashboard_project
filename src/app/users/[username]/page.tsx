import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";

export default function SingleUserPage(){
    return(
        <div className="">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbPage>Jecilia Teixeira</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
          {/* CONTAINER */} 
          <div className="mt-4 flex flex-col xl:flex-row gap-8">
           {/*  LEFT */}
           <div className="w-full xl:w-1/3 space-y-6">
               {/*  USER BADGES CONTAINER */}
               <div className="bg-primary-foreground p-4 rounded-lg">
                <h1 className="text-xl font-semibold">User Badges</h1>
                <div className="flex gap-4 mt-4">
                  <HoverCard>
                    <HoverCardTrigger>
                      <BadgeCheck size={36} className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"/>
                    </HoverCardTrigger>
                    <HoverCardContent>
                    <h1 className="font-bold mb-2">Verified User</h1>
                    <p className="text-sm text-muted-foreground">This user has been verified by the admin</p>
                    </HoverCardContent>
                  </HoverCard>

                  <HoverCard>
                    <HoverCardTrigger>
                      <Shield size={36} className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2"/>
                    </HoverCardTrigger>
                    <HoverCardContent>
                    <h1 className="font-bold mb-2">Admin</h1>
                    <p className="text-sm text-muted-foreground">This user has access to all features and can manage</p>
                    </HoverCardContent>
                  </HoverCard>

                  <HoverCard>
                    <HoverCardTrigger>
                      <Candy size={36} className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"/>
                    </HoverCardTrigger>
                    <HoverCardContent>
                    <h1 className="font-bold mb-2">Awarded</h1>
                    <p className="text-sm text-muted-foreground">This user has awarded for their contributionss</p>
                    </HoverCardContent>
                  </HoverCard>

                  <HoverCard>
                    <HoverCardTrigger>
                      <Citrus size={36} className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"/>
                    </HoverCardTrigger>
                    <HoverCardContent>
                    <h1 className="font-bold mb-2">Popular</h1>
                    <p className="text-sm text-muted-foreground">This user has been popular in the community</p>
                    </HoverCardContent>
                  </HoverCard>

                </div>
               </div>
                 {/*  INFORMATION CONTAINER */}
               <div className="bg-primary-foreground p-4 rounded-lg">
                <h1 className="text-xl font-semibold">User Info</h1>
                <div className="space-y-4 mt-4">
                  <div className="flex flex-col gap-2 mb-8">
                    <p className="text-sm text-muted-foreground">Profile Completion</p>
                    <Progress value={66} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">Username:</span>
                    <span>Jecilia Teixeira</span>
                  </div>
                   <div className="flex items-center gap-2">
                    <span className="font-bold">Email:</span>
                    <span>Jeciliateixeira@gmail.com</span>
                  </div>
                   <div className="flex items-center gap-2">
                    <span className="font-bold">Phone:</span>
                    <span>+244 912 456 789</span>
                  </div>
                   <div className="flex items-center gap-2">
                    <span className="font-bold">Location:</span>
                    <span>Luanda, LA</span>
                  </div>
                   <div className="flex items-center gap-2">
                    <span className="font-bold">Role:</span>
                   <Badge>Admin</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">Joined on 2025.01.01</p>
               </div>
                {/*  CARD LIST CONTAINER */}
               <div className="bg-primary-foreground p-4 rounded-lg">
                <CardList title="Recent Transactions" />
               </div>

            </div>
        
              {/*  RIGHT */}
           <div className="w-full xl:w-2/3 space-y-6">
                 {/* USER CARD CONTAINER */}
               <div className="bg-primary-foreground p-4 rounded-lg">User Card</div>
                 {/* CHARD CONTAINER */}
               <div className="bg-primary-foreground p-4 rounded-lg">Chart</div>
           </div>
          
        </div>
     </div>
    )
}