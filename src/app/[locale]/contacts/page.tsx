import Contacts from "@/components/contactsPage/Contacts";
import { getLocale } from "next-intl/server";
import JsonLd from "@/components/shared/jsonLd/JsonLd";
import { buildPagePathname } from "@/utils/getDefaultMetadata";

export default async function ContactsPage() {
  const locale = (await getLocale()) ?? "en";

  return (
    <>
      <JsonLd pathname={buildPagePathname(locale, "contacts")} />
      <Contacts />
    </>
  );
}
