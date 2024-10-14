'use client'
import { Button, RadioGroup, TextArea, TextField, Theme } from "@radix-ui/themes"
import "@radix-ui/themes/styles.css";
import "react-country-state-city/dist/react-country-state-city.css";
import {
    CitySelect,
    CountrySelect,
    StateSelect,
  } from "react-country-state-city";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faStar, faUser } from "@fortawesome/free-solid-svg-icons";

export default function JobForm() {

    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0); 

  return (
    <Theme>
        <form 
            action=''
            className="container mt-6 flex flex-col gap-4">
            <TextField.Root placeholder="Job Title" />

            <div className="grid grid-cols-3 gap-6 *:grow">
                <div>
                    Remote?
                    <RadioGroup.Root defaultValue="hybrid" name="example">
                        <RadioGroup.Item value="onsite">On-site</RadioGroup.Item>
                        <RadioGroup.Item value="hybrid">Hybrid-remote</RadioGroup.Item>
                        <RadioGroup.Item value="remote">Fully remote</RadioGroup.Item>
                    </RadioGroup.Root>
                </div>
                <div>
                    Full time?
                    <RadioGroup.Root defaultValue="full" name="example">
                        <RadioGroup.Item value="project">Project</RadioGroup.Item>
                        <RadioGroup.Item value="part">Part-time</RadioGroup.Item>
                        <RadioGroup.Item value="full">Full-time</RadioGroup.Item>
                    </RadioGroup.Root>
                </div>
                <div>
                    Salary
                    <TextField.Root>
                        <TextField.Slot>
                            $
                        </TextField.Slot>
                        <TextField.Slot>
                            k/year
                        </TextField.Slot>
                    </TextField.Root>
                </div>
            </div>
            <div>
                Location
                <div className="flex gap-4 *:grow">
                    <CountrySelect
                        onChange={(e) => {
                        setCountryid(e.id);
                        }}
                        placeHolder="Select Country"
                    />
                    <StateSelect
                        countryid={countryid}
                        onChange={(e) => {
                        setstateid(e.id);
                        }}
                        placeHolder="Select State"
                    />
                    <CitySelect
                        countryid={countryid}
                        stateid={stateid}
                        onChange={(e) => {
                        console.log(e);
                        }}
                        placeHolder="Select City"
                    />
                </div>
            </div>

            <div className="flex">
                <div className="w-1/2">
                    <h3>Job icon</h3>
                    <div className="bg-gray-100 size-24 inline-flex items-center justify-center rounded-md">
                        <FontAwesomeIcon icon={faStar} className="text-gray-400" />
                    </div>
                    <div className="mt-2">
                        <Button variant="soft">Upload</Button>
                    </div>
                </div>

                <div className="grow">
                    <h3>Contact person</h3>
                    <div className="flex gap-2">
                        <div>
                            <div className="bg-gray-100 size-24 inline-flex items-center justify-center rounded-md">
                            <FontAwesomeIcon icon={faUser} className="text-gray-400" />
                            </div>
                            <div className="mt-2">
                                <Button variant="soft">Upload</Button>
                            </div>
                        </div>
                        <div className="grow flex flex-col gap-1">
                            <TextField.Root placeholder="Name" >
                                <TextField.Slot>
                                    <FontAwesomeIcon icon={faUser} />
                                </TextField.Slot>
                            </TextField.Root>
                            <TextField.Root placeholder="Phone" type="tel" >
                                <TextField.Slot>
                                    <FontAwesomeIcon icon={faPhone} />
                                </TextField.Slot>
                            </TextField.Root>
                            <TextField.Root placeholder="Email" type="email" >
                                <TextField.Slot>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </TextField.Slot>
                            </TextField.Root>
                        </div>
                    </div>
                </div>
            </div>
            
            <TextArea placeholder="Job Description" resize="vertical" />
            <div className="flex justify-center">
                <Button size="3">
                    <span className="px-8">Save</span>
                </Button>
            </div>
        </form>
    </Theme>
  )
}
