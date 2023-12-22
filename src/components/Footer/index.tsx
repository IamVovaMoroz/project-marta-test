import { NextPage } from "next";
import React from "react";
import config from "@/config";
import IconsBar from "@/components/Footer/IconsBar";
import { CustomImage } from "@/components";
import Link from "next/link";
import styles from "./Footer.module.css";

interface FooterProps {
  data: {
    email: string;
    phones: string;
    socialNet: string;
    report: string;
    rules: string;
    policy: string;
  };
}

const fetchContacts = async (params: string) => {
  const reqOptions: object = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN1}`,
    },
  };

  const req = await fetch(
    `${config.api}/api/contacts?populate=*&${params}`,
    // `${config.api}/api/contacts?populate=*&${params}`,
    reqOptions,
  );

  const res = await req.json();
  // https://marta-back.onrender.com/api/news?populate=*
  // console.log(res);
  return res;
};

export const Footer: NextPage<FooterProps> = async ({ data }) => {
  const getContacts = await fetchContacts("");
  // console.log("getContacts =>", getContacts.data[0].attributes.email);
  // console.log("getContacts =>", getContacts.data[0].attributes.phone_second);
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <CustomImage src="/images/logo/site_logo.png" fill alt="logo" />
        </div>
        <div className={styles.contactWrapper}>
          <div className={styles.map}>
            <CustomImage src="/images/pictures/map.png" fill alt="map" />
          </div>
          <div className={styles.getTouch}>
            <div className={styles.contacts}>
              <p className={styles.captions}>{data.email}</p>
              {/* <p className={styles.text}>cityofgoodnessua@gmail.com</p> */}
              <p className={styles.text}>
                {getContacts.data[0].attributes.email}
              </p>
            </div>
            <div className={styles.contacts}>
              <p className={styles.captions}>{data.phones}</p>
              <div className={styles.phones}>
                {/* <p className={styles.text}>+380 95 053 60 09</p> */}
                <p className={styles.text}>
                  {getContacts.data[0].attributes.phone_first}
                </p>
                {/* <p className={styles.text}>0 80 050 32 31</p> */}
                <p className={styles.text}>
                  {getContacts.data[0].attributes.phone_second}
                </p>
              </div>
            </div>
            <div className={`${styles.contacts} ${styles.socialBlock} `}>
              <p className={styles.captions}>{data.socialNet}</p>
              <IconsBar />
            </div>
          </div>
        </div>
        <div className={styles.rules}>
          <Link href="report">
            <span>{data.report}</span>
          </Link>
          <div className={styles.usage}>
            <span>{data.policy}</span>
            <span>{data.rules}</span>
          </div>
          <p className={styles.rights}>
            Розробка Baza Trainee Ukraine 2023 (©) Усі права захищені
          </p>
        </div>
      </div>
    </footer>
  );
};
