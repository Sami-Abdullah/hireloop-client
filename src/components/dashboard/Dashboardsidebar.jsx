

import { Bars, Bell, Envelope, Gear,Briefcase, House, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";

export function Dashboardsidebar() {
  const navItems = [
    { icon: House, href: '/dashboard/recuriter', label: "Home" },
    { icon: Magnifier, href: '/dashboard/recuriter/jobs', label: "Jobs" },
    { icon: Bell, href: '/dashboard/recuriter/jobs/new', label: "Create a job" },
    { icon: Briefcase, href: '/dashboard/recuriter/company', label: "Company Profile" },

  ];


  const sideitems =

    navItems.map((item) => (
      <Link
        key={item.label}
        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
        href={item.href}
      >
        <item.icon className="size-5 text-muted" />
        {item.label}
      </Link>
    ))



  return (

    <>
      <div className="hidden lg:block w-64 border-r border-default shrink-0 p-4 ">
        {
          sideitems
        }
      </div>

      <Drawer >
        <Button className='lg:hidden' variant="secondary">
          <Bars />
          Menu
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>
                <nav className="flex flex-col gap-1">
                  {
                    sideitems
                  }
                </nav>
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}