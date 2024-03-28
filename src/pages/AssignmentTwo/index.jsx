import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading } from "../../components";

export default function AssignmentTwoPage() {
  return (
    <>
      <Helmet>
        <title>ChainTech</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full pt-[27px] sm:pt-5 bg-black-900">
        <div className="flex flex-col gap-28 md:gap-[84px] sm:gap-14">
          <div className="flex flex-col items-center w-full gap-[69px] mx-auto md:p-5 sm:gap-[34px] max-w-[1225px]">
            <header className="self-stretch border-gray-900 border-[0.5px] border-solid">
              <div className="flex md:flex-col justify-between items-center gap-5">
                <Img src="images/img_group.svg" alt="image" className="h-[48px] md:w-full" />
                <div className="flex md:flex-col self-end justify-center items-start w-[59%] md:w-full mb-[5px]">
                  <a href="Company" target="_blank" rel="noreferrer">
                    <Heading size="md" as="h6" className="!text-teal-A400">
                      Company
                    </Heading>
                  </a>
                  <a href="Services" target="_blank" rel="noreferrer" className="ml-14 md:ml-0 text-shadow-ts1">
                    <Heading size="md" as="h6" className="!text-white-A700">
                      Services
                    </Heading>
                  </a>
                  <div className="flex sm:flex-col justify-center items-start md:self-stretch ml-[74px] md:ml-0 flex-1 flex-wrap">
                    <Heading size="md" as="h6" className="w-[53%] sm:w-full !text-white-A700 text-shadow-ts">
                      Business Models
                    </Heading>
                    <a href="Blogs" target="_blank" rel="noreferrer" className="ml-[39px] sm:ml-0 text-shadow-ts">
                      <Heading size="md" as="h6" className="!text-white-A700">
                        Blogs
                      </Heading>
                    </a>
                    <a href="#" className="ml-[50px] sm:ml-0 text-shadow-ts">
                      <Heading size="md" as="h6" className="!text-white-A700">
                        Contact Us
                      </Heading>
                    </a>
                  </div>
                </div>
              </div>
            </header>
            <div className="flex justify-center w-[79%] md:w-full">
              <div className="flex flex-col items-center w-full gap-[37px]">
                <div className="self-stretch h-[350px] md:h-auto relative">
                  <div className="flex flex-col items-start w-full">
                    <Heading
                      size="2xl"
                      as="h1"
                      className="ml-[106px] md:ml-0 !text-white-A700 tracking-[13.20px] z-[1]"
                    >
                      WELCOME
                    </Heading>
                    <div className="flex flex-col self-stretch items-start mt-[-60px] relative">
                      <Heading size="2xl" as="h2" className="ml-[5px] md:ml-0 !text-white-A700 tracking-[13.20px]">
                        TO{" "}
                      </Heading>
                      <Text
                        as="p"
                        className="mt-[-4px] !text-white-A700 tracking-[1.08px] text-center relative leading-[152.19%]"
                      >
                        From square one to engineering excellence! PixelPlex assists in full-cycle software development,
                        jumps in to take it over, or brings dedicated top-demanded skills.
                      </Text>
                    </div>
                  </div>
                  <Heading
                    size="2xl"
                    as="h3"
                    className="bottom-[12%] right-[5%] m-auto !text-transparent !font-extrabold bg-gradient1 bg-clip-text absolute"
                  >
                    CHAINTECH
                  </Heading>
                </div>
                <Button
                  color="white_A700"
                  size="md"
                  variant="fill"
                  rightIcon={<Img src="images/img_arrowright.svg" alt="arrow_right" />}
                  className="gap-[31px] sm:pl-5 font-semibold border-[3px] min-w-[211px] rounded-[33px]"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
          <div className="h-[1751px] md:h-auto relative">
            <div className="flex flex-col w-full gap-[25px] px-14 py-[85px] md:p-5 bg-white-A700">
              <div className="w-full mx-auto max-w-[1223px]">
                <div className="flex md:flex-col justify-between items-center gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex">
                      <div className="flex md:flex-col items-start">
                        <Heading size="xl" as="h2" className="z-[1]">
                          Services We Offer
                        </Heading>
                        <div className="flex ml-[-57px] md:ml-0 relative">
                          <div className="flex">
                            <div className="flex">
                              <div className="flex">
                                <Heading
                                  size="xl"
                                  as="h3"
                                  className="!text-white-A700 !font-mont text-center !font-extrabold"
                                >
                                  Services We Offer{" "}
                                </Heading>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Text as="p" className="!text-black-900_02">
                      Discover the digital possibilities for your brand with our comprehensive suite of services.
                    </Text>
                  </div>
                  <div className="flex self-end items-center mb-[7px] gap-[25px]">
                    <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[14px]" />
                    <Button
                      color="white_A700"
                      size="sm"
                      variant="fill"
                      shape="circle"
                      className="w-[48px] border-2 !shadow-sm !rounded-[24px]"
                    >
                      <Img src="images/img_arrow_right_gray_900_02.svg" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="justify-center w-full mb-[634px] gap-4 grid-cols-[repeat(auto-fill,_minmax(293px_,_1fr))] mx-auto grid max-w-[1226px]">
                <div className="flex flex-col w-full py-3.5 bg-teal-A400_01 rounded-[20px]">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center w-[60%] md:w-full gap-2">
                      <div className="h-[29px] w-[29px] md:h-auto p-[5px] bg-black-900_02 relative rounded-[14px]">
                        <Img src="images/img_maximize.svg" alt="join" className="h-[9px] mr-[5px] md:mr-0" />
                        <Img
                          src="images/img_trophy.svg"
                          alt="join"
                          className="h-[19px] left-[9.00px] bottom-0 top-0 my-auto absolute"
                        />
                      </div>
                      <Heading size="s" as="h4" className="self-end text-center">
                        Join Development{" "}
                      </Heading>
                    </div>
                    <div className="self-stretch h-[2px] w-full mt-3 bg-black-900_02" />
                    <Heading as="h5" className="mt-11 !text-black-900_01 text-center leading-[105.4%]">
                      <>
                        Blockchain
                        <br />
                        Development{" "}
                      </>
                    </Heading>
                    <div className="self-stretch h-[156px] mt-[37px] relative">
                      <div className="h-[2px] w-full bottom-[5.00px] right-0 left-0 m-auto bg-black-900_02 absolute" />
                      <Img
                        src="images/img_design_prototyp.png"
                        alt="image"
                        className="h-[156px] w-[90%] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                    </div>
                    <Button
                      shape="round"
                      rightIcon={<Img src="images/img_arrowright_gray_900_01.svg" alt="arrow_right" />}
                      className="self-end mt-[7px] gap-[15px] font-semibold min-w-[117px]"
                    >
                      Explore{" "}
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col w-full py-[15px] bg-cyan-A400 rounded-[20px]">
                  <div className="flex flex-col items-center">
                    <div className="flex self-start items-center gap-2">
                      <Img src="images/img_music.svg" alt="music_one" className="h-[29px] w-[29px]" />
                      <Heading size="s" as="h6" className="self-end text-center">
                        Join Development{" "}
                      </Heading>
                    </div>
                    <div className="self-stretch h-[2px] w-full mt-3 bg-black-900_02" />
                    <Heading as="h5" className="mt-11 !text-black-900_01 text-center leading-[105.4%]">
                      <>
                        Blockchain
                        <br />
                        Development{" "}
                      </>
                    </Heading>
                    <div className="self-stretch h-[177px] mt-5 relative">
                      <div className="h-[2px] w-full bottom-[9.00px] right-0 left-0 m-auto bg-black-900_02 absolute" />
                      <Img
                        src="images/img_4494868_1.png"
                        alt="image"
                        className="h-[177px] w-[91%] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                    </div>
                    <div className="flex self-end mt-0.5">
                      <div className="flex items-center gap-[15px] p-[7px] bg-black-900_02 shadow-sm rounded-[19px]">
                        <Heading size="xs" as="p" className="self-end !text-white-A700">
                          Explore{" "}
                        </Heading>
                        <div className="flex flex-col items-start justify-center p-1 bg-gradient1 rounded-[11px]">
                          <Img
                            src="images/img_arrowright_gray_900_01.svg"
                            alt="arrowright_one"
                            className="h-[8px] my-0.5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full py-[15px] bg-red-A200 rounded-[20px]">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center ml-[21px] gap-2 md:ml-0">
                      <Img src="images/img_music.svg" alt="music_one" className="h-[29px] w-[29px]" />
                      <Heading size="s" as="p" className="self-end text-center">
                        Join Development{" "}
                      </Heading>
                    </div>
                    <div className="self-stretch h-[2px] w-full mt-3 bg-black-900_02" />
                    <Heading as="h5" className="mt-11 !text-black-900_01 text-center leading-[105.4%]">
                      <>
                        Security <br />
                        AAS
                      </>
                    </Heading>
                    <div className="self-stretch h-[227px] mt-2.5 relative">
                      <div className="h-[2px] w-full bottom-[22%] right-0 left-0 m-auto bg-black-900_02 absolute" />
                      <div className="flex flex-col items-end w-[87%] h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                        <Img
                          src="images/img_9646c1361705d0d16e.png"
                          alt="9646c1361705d0d"
                          className="h-[199px] w-full md:h-auto z-[1] object-cover"
                        />
                        <div className="flex items-center mt-[-10px] gap-[15px] p-[7px] relative border-black-900_02 border-2 border-solid bg-gradient shadow-md rounded-[19px]">
                          <Heading size="xs" as="p" className="self-end">
                            Explore{" "}
                          </Heading>
                          <div className="flex flex-col items-start justify-center p-1 bg-gradient1 rounded-[11px]">
                            <Img
                              src="images/img_arrowright_gray_900_01.svg"
                              alt="arrowright_one"
                              className="h-[8px] my-0.5"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full py-[15px] bg-indigo-A700 rounded-[20px]">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center w-[65%] md:w-full ml-[21px] gap-2 md:ml-0">
                      <div className="h-[29px] w-[29px] md:h-auto p-[5px] bg-black-900_02 relative rounded-[14px]">
                        <Img src="images/img_maximize.svg" alt="maximize_one" className="h-[9px] mr-[5px] md:mr-0" />
                        <Img
                          src="images/img_trophy.svg"
                          alt="trophy_one"
                          className="h-[19px] left-[9.00px] bottom-0 top-0 my-auto absolute"
                        />
                      </div>
                      <Heading size="s" as="p" className="self-end text-center">
                        Join Development{" "}
                      </Heading>
                    </div>
                    <div className="self-stretch h-[2px] w-full mt-3 bg-black-900_02" />
                    <Heading as="h5" className="mt-11 !text-black-900_01 text-center leading-[105.4%]">
                      <>
                        Motion
                        <br />
                        Graphic
                      </>
                    </Heading>
                    <div className="self-stretch h-[234px] mt-1 relative">
                      <div className="h-[2px] w-full bottom-[21%] right-0 left-0 m-auto bg-black-900_02 absolute" />
                      <div className="flex flex-col items-end w-[94%] h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                        <Img
                          src="images/img_2895987_1.png"
                          alt="image"
                          className="h-[218px] w-full md:h-auto z-[1] object-cover"
                        />
                        <Button
                          shape="round"
                          rightIcon={<Img src="images/img_arrowright_gray_900_01.svg" alt="arrow_right" />}
                          className="mt-[-22px] mr-2.5 gap-[15px] md:mr-0 font-semibold relative min-w-[117px]"
                        >
                          Explore{" "}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full py-3.5 bg-teal-A400_01 rounded-[20px]">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center w-[60%] md:w-full gap-2">
                      <div className="h-[29px] w-[29px] md:h-auto p-[5px] bg-black-900_02 relative rounded-[14px]">
                        <Img src="images/img_maximize.svg" alt="maximize_one" className="h-[9px] mr-[5px] md:mr-0" />
                        <Img
                          src="images/img_trophy.svg"
                          alt="trophy_one"
                          className="h-[19px] left-[9.00px] bottom-0 top-0 my-auto absolute"
                        />
                      </div>
                      <Heading size="s" as="p" className="self-end text-center">
                        Join Development{" "}
                      </Heading>
                    </div>
                    <div className="self-stretch h-[2px] w-full mt-3 bg-black-900_02" />
                    <Heading as="h5" className="mt-11 !text-black-900_01 text-center leading-[105.4%]">
                      <>
                        Blockchain
                        <br />
                        Development{" "}
                      </>
                    </Heading>
                    <div className="self-stretch h-[156px] mt-[37px] relative">
                      <div className="h-[2px] w-full bottom-[5.00px] right-0 left-0 m-auto bg-black-900_02 absolute" />
                      <Img
                        src="images/img_design_prototyp.png"
                        alt="designprototyp"
                        className="h-[156px] w-[90%] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                    </div>
                    <Button
                      shape="round"
                      rightIcon={<Img src="images/img_arrowright_gray_900_01.svg" alt="arrow_right" />}
                      className="self-end mt-[7px] gap-[15px] font-semibold min-w-[117px]"
                    >
                      Explore{" "}
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col w-full py-3.5 bg-cyan-A400 rounded-[20px]">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center w-[60%] md:w-full gap-2">
                      <div className="h-[29px] w-[29px] md:h-auto p-[5px] bg-black-900_02 relative rounded-[14px]">
                        <Img src="images/img_maximize.svg" alt="maximize_one" className="h-[9px] mr-[5px] md:mr-0" />
                        <Img
                          src="images/img_trophy.svg"
                          alt="trophy_one"
                          className="h-[19px] left-[9.00px] bottom-0 top-0 my-auto absolute"
                        />
                      </div>
                      <Heading size="s" as="p" className="self-end text-center">
                        Join Development{" "}
                      </Heading>
                    </div>
                    <div className="self-stretch h-[2px] w-full mt-3 bg-black-900_02" />
                    <Heading as="h5" className="mt-11 !text-black-900_01 text-center leading-[105.4%]">
                      <>
                        Blockchain
                        <br />
                        Development{" "}
                      </>
                    </Heading>
                    <div className="self-stretch h-[177px] mt-5 relative">
                      <div className="h-[2px] w-full bottom-[9.00px] right-0 left-0 m-auto bg-black-900_02 absolute" />
                      <Img
                        src="images/img_4494868_1.png"
                        alt="image"
                        className="h-[177px] w-[91%] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                    </div>
                    <Button
                      shape="round"
                      rightIcon={<Img src="images/img_arrowright_gray_900_01.svg" alt="arrow_right" />}
                      className="self-end mt-[3px] gap-[15px] font-semibold min-w-[117px]"
                    >
                      Explore{" "}
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col w-full py-3.5 bg-red-A200 rounded-[20px]">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center w-[65%] md:w-full ml-[21px] gap-2 md:ml-0">
                      <div className="h-[29px] w-[29px] md:h-auto p-[5px] bg-black-900_02 relative rounded-[14px]">
                        <Img src="images/img_maximize.svg" alt="maximize_one" className="h-[9px] mr-[5px] md:mr-0" />
                        <Img
                          src="images/img_trophy.svg"
                          alt="trophy_one"
                          className="h-[19px] left-[9.00px] bottom-0 top-0 my-auto absolute"
                        />
                      </div>
                      <Heading size="s" as="p" className="self-end text-center">
                        Join Development{" "}
                      </Heading>
                    </div>
                    <div className="self-stretch h-[2px] w-full mt-3 bg-black-900_02" />
                    <div className="self-stretch h-[286px] mt-11 relative">
                      <div className="flex flex-col w-full gap-[185px] top-[0.00px] right-0 left-0 m-auto md:gap-[138px] sm:gap-[92px] absolute">
                        <Heading as="h5" className="!text-black-900_01 text-center leading-[105.4%]">
                          <>
                            Security <br />
                            AAS
                          </>
                        </Heading>
                        <div className="h-[2px] bg-black-900_02" />
                      </div>
                      <div className="flex flex-col items-end w-[86%] bottom-[0.00px] right-0 left-0 m-auto absolute">
                        <Img
                          src="images/img_9646c1361705d0d16e.png"
                          alt="9646c1361705d0d"
                          className="h-[246px] w-full md:h-auto object-cover"
                        />
                        <Button
                          shape="round"
                          rightIcon={<Img src="images/img_arrowright_gray_900_01.svg" alt="arrow_right" />}
                          className="mt-[-35px] mr-0.5 gap-[15px] md:mr-0 font-mont font-extrabold relative min-w-[117px]"
                        >
                          Explore{" "}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full py-3.5 bg-indigo-A700 rounded-[20px]">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center w-[65%] md:w-full ml-[21px] gap-2 md:ml-0">
                      <div className="h-[29px] w-[29px] md:h-auto p-[5px] bg-black-900_02 relative rounded-[14px]">
                        <Img src="images/img_maximize.svg" alt="maximize_one" className="h-[9px] mr-[5px] md:mr-0" />
                        <Img
                          src="images/img_trophy.svg"
                          alt="trophy_one"
                          className="h-[19px] left-[9.00px] bottom-0 top-0 my-auto absolute"
                        />
                      </div>
                      <Heading size="s" as="p" className="self-end text-center">
                        Join Development{" "}
                      </Heading>
                    </div>
                    <div className="self-stretch h-[2px] w-full mt-3 bg-black-900_02" />
                    <Heading as="h5" className="mt-11 !text-black-900_01 text-center leading-[105.4%]">
                      <>
                        Motion
                        <br />
                        Graphic
                      </>
                    </Heading>
                    <div className="self-stretch h-[234px] mt-1 relative">
                      <div className="h-[2px] w-full bottom-[21%] right-0 left-0 m-auto bg-black-900_02 absolute" />
                      <div className="flex flex-col items-end w-[94%] h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                        <Img
                          src="images/img_2895987_1.png"
                          alt="image"
                          className="h-[218px] w-full md:h-auto object-cover"
                        />
                        <Button
                          shape="round"
                          rightIcon={<Img src="images/img_arrowright_gray_900_01.svg" alt="arrow_right" />}
                          className="mt-[-22px] mr-1 gap-[15px] md:mr-0 font-semibold relative min-w-[117px]"
                        >
                          Explore{" "}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="flex justify-center items-center w-full bottom-[22%] right-0 left-0 p-[49px] m-auto md:p-5 bg-black-900_01 absolute">
              <div className="flex flex-col items-center justify-center w-[75%] md:w-full mt-[18px] mr-[326px] gap-9">
                <Img src="images/img_group.svg" alt="image_one" className="h-[46px]" />
                <div className="self-stretch h-px bg-gray-700" />
                <Text size="xs" as="p" className="self-end text-center">
                  © 2024 All Rights Reserved - Chaintech Network
                </Text>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
