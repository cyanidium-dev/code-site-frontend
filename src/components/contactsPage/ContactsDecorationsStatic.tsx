"use client";

import Image from "next/image";

export default function ContactsDecorationsStatic() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Paper */}
      <div className="absolute -z-30 -top-6 lg:top-[-542px] left-[calc(50%-525px)] lg:left-[calc(50%-1082px)] w-[972px] lg:w-[1419px] h-auto aspect-[972/927] rotate-[-8deg] lg:rotate-none mix-blend-hard-light">
        <Image
          src="/images/contactsPage/paper.webp"
          alt="paper"
          width={927}
          height={972}
          sizes="(max-width: 1024px) 972px, 1419px"
          className="w-[972px] lg:w-[1419px] h-auto"
        />
      </div>

      {/* Drops pink */}
      <div className="absolute z-10 top-[690px] lg:top-[29px] right-[calc(50%-251px)] lg:right-[calc(50%-740px)] w-[227px] lg:w-[292px] h-auto aspect-[292/292]">
        <Image
          src="/images/contactsPage/drops-pink.svg"
          alt="drops"
          width={292}
          height={292}
          className="w-[227px] lg:w-[292px] h-auto"
        />
      </div>

      {/* Drops blue (mobile) */}
      <div className="lg:hidden absolute z-10 top-[287px] left-[calc(50%-249px)] w-[224px] h-auto aspect-[224/224]">
        <Image
          src="/images/contactsPage/drops-blue.svg"
          alt="drops"
          width={224}
          height={224}
          className="w-[224px] h-auto"
        />
      </div>

      {/* Head mobile */}
      <div className="lg:hidden absolute -z-20 top-[203px] right-[calc(50%-232px)] w-[355px] h-auto aspect-[355/491] mix-blend-color-dodge">
        <Image
          src="/images/contactsPage/headMob.webp"
          alt="head"
          width={355}
          height={491}
          sizes="355px"
          className="w-[355px] h-auto"
        />
      </div>

      {/* Head desktop */}
      <div className="hidden lg:block absolute -z-20 top-[-398px] left-[calc(50%-469px)] w-[664px] h-auto aspect-[664/918] mix-blend-color-dodge">
        <Image
          src="/images/contactsPage/headDesk.webp"
          alt="head"
          width={664}
          height={918}
          sizes="(min-width: 1024px) 664px, 0px"
          className="w-[664px] h-auto"
        />
      </div>

      {/* Code-site blue mobile */}
      <div className="lg:hidden absolute -z-20 top-[210px] right-[calc(50%-372px)] w-[355px] h-auto aspect-[355/491] mix-blend-plus-darker">
        <Image
          src="/images/contactsPage/code-site-blue-mob.svg"
          alt="code-site.art"
          width={355}
          height={491}
          className="w-[355px] h-auto"
        />
      </div>

      {/* Code-site blue desktop */}
      <div className="hidden lg:block absolute -z-10 top-[-259px] left-[calc(50%-255px)] w-[502px] h-auto aspect-[502/433] mix-blend-plus-darker">
        <Image
          src="/images/contactsPage/code-site-blue-desk.webp"
          alt="code-site.art"
          width={502}
          height={433}
          className="w-[502px] h-auto lg:opacity-30"
        />
      </div>

      {/* Code-site logo */}
      <div className="absolute lg:-z-10 bottom-[-10px] lg:bottom-auto lg:top-[347px] right-[calc(50%-454px)] xs:right-[calc(50%-574px)] md:right-[calc(50%-624px)] lg:right-[calc(50%-367px)] w-[474px] h-auto aspect-[474/493] mix-blend-hard-light rotate-[10deg]">
        <Image
          src="/images/contactsPage/code-site.svg"
          alt="code-site.art"
          width={474}
          height={493}
          className="w-[474px] h-auto"
        />
      </div>

      {/* Girl */}
      <div className="absolute -z-20 top-20 lg:top-2 left-[calc(50%-201px)] lg:left-[calc(50%-726px)] w-[285px] lg:w-[335px] h-auto aspect-[335/717]">
        <Image
          src="/images/contactsPage/girl.webp"
          alt="girl"
          width={335}
          height={717}
          sizes="(max-width: 1024px) 285px, 335px"
          className="w-[285px] lg:w-[335px] h-auto"
        />
      </div>

      {/* Flame mobile */}
      <div className="lg:hidden absolute -z-30 top-[233px] left-[calc(50%-257px)] w-[513px] h-auto aspect-[513/179]">
        <Image
          src="/images/contactsPage/flameMob.webp"
          alt="flame"
          width={513}
          height={179}
          sizes="(max-width: 1024px) 513px, 0px"
          className="w-[513px] h-auto"
        />
      </div>

      {/* Flame desktop */}
      <div className="hidden lg:block absolute -z-30 top-[360px] left-[calc(50%-820px)] w-[670px] h-auto aspect-[670/359]">
        <Image
          src="/images/contactsPage/flameDesk.webp"
          alt="flame"
          width={670}
          height={359}
          sizes="(min-width: 1024px) 670px, 0px"
          className="w-[670px] h-auto"
        />
      </div>

      {/* Gradient ovals (iOS-style) */}
      <div
        className="absolute -z-10 lg:z-[-40] top-[470px] lg:top-[320px] right-[calc(50%-380px)] lg:right-[calc(50%-70px)] w-[324px] lg:w-[552px] h-[386px] lg:h-[504px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, #04DCF8 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div
        className="absolute -z-10 top-[449px] lg:top-[474px] left-1/2 -translate-x-1/2 w-[357%] lg:w-[200%] h-[649px] lg:h-[607px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-black) 30%, transparent 70%)",
        }}
        aria-hidden
      />

      <div
        className="hidden lg:block absolute -z-20 top-[543px] right-[calc(50%-964px)] w-[480px] h-[436px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-main) 0%, transparent 70%)",
        }}
        aria-hidden
      />
    </div>
  );
}

