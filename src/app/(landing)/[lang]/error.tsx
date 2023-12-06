"use client";

import { NextPage } from "next";
import { ErrorElement } from "@/components";
import { IErrorResponse } from "@/types";

interface IPtrops {
  error: IErrorResponse;
}

const Error: NextPage<IPtrops> = ({ error }) => (
  <ErrorElement statusCode={error?.status} title={error?.message} />
);

export default Error;
