"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePickerInput } from "./date-picker-input";

export function DatePickerForm() {
  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Select Your Birth Date</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
            <DatePickerInput />
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex  justify-between'>
        <Button className='w-[100%]'>Find My Zodiac</Button>
      </CardFooter>
    </Card>
  );
}
