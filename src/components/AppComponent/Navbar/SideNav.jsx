import Link from "next/link"; // Import Link from next/link
import { Settings, Hash, AudioLines, Calendar } from "lucide-react";

export function SideNav() {
  const navItems = [
    { name: "AudioLines", icon: AudioLines, href: "/" },
    { name: "Settings", icon: Settings, href: "/settings" },
    { name: "Calendar", icon: Calendar, href: "/calendar" },
    { name: "Hashtags", icon: Hash, href: "/hashtags" },
  ];

  return (
    <div>
      <div className="hidden xl:block h-screen p-4 border border-gray-800">
        <nav>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>

                <Link href={item.href} className="flex items-center gap-4 p-2 text-xl">
                  <item.icon /> {/* Render the icon */}
                </Link>

              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="xl:hidden mt-4">
        <nav >
          <ul className="flex justify-evenly">
            {navItems.map((item) => (
              <li key={item.name}>

                <Link href={item.href} className="flex items-center gap-4 p-2 text-xl">
                  <item.icon /> {/* Render the icon */}
                </Link>

              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
