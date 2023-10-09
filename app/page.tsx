"use client";

import Image from "next/image";
import Logo from "../public/assets/zodiac-sign-finder-logo.png";
import { DatePickerInput } from "@/components/customComponents/date-picker-input";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import StarShapedZodiacAbstract from "../public/assets/star-shaped-zodiac-abstract.png";
import AriesZodiac from "../public/assets/aries-horoscope-astrology-zodiac.png";
import CancerZodiac from "../public/assets/cancer-horoscope-astrology-zodiac.png";
import GeminiZodiac from "../public/assets/gemini-horoscope-astrology-zodiac.png";
import LeoZodiac from "../public/assets/leo-horoscope-astrology-zodiac.png";
import TaurusZodiac from "../public/assets/taurus-horoscope-astrology-zodiac.png";
import VirgoZodiac from "../public/assets/virgo-horoscope-astrology-zodiac.png";
import LibraZodiac from "../public/assets/libra-horoscope-astrology-zodiac.png";
import ScorpioZodiac from "../public/assets/scorpio-horoscope-astrology-zodiac.png";
import SagitariusZodiac from "../public/assets/sagittarius-horoscope-astrology-zodiac.png";
import CapricornZodiac from "../public/assets/capricon-horoscope-astrology-zodiac.png";
import AquariusZodiac from "../public/assets/aquarius-horoscope-zodiac-fortune.png";
import PiscesZodiac from "../public/assets/pisces-horoscope-astrology-zodiac.png";

export default function Home() {
  return (
    <main className='home_page'>
      <section className='hero__section'>
        <div className='zodiac-bg-abstract'></div>

        <div className='hero-body'>
          <header className='nav__header'>
            <nav className='nav container'>
              <ul>
                <li>
                  <Image src={Logo} alt='Zodiac Sign Finder Logo' />
                </li>
              </ul>
              {/* <ul>
              <li className='font_500'>Home</li>
              <li className='font_500'>About</li>
              <li className='font_500'>Service</li>
            </ul> */}
            </nav>
          </header>

          <h1 className='font_600 heading'>YOUR PATH TO</h1>
          <h1 className='font_600 heading' style={{ marginTop: "-1rem" }}>
            UNDERSTANDING
            <span> ZODIAC</span>
          </h1>
          <div className='sub_heading__container'>
            <h2 className='sub__heading font_400'>Unlock the mysteries of the zodiac and explore astrology&apos;s wonders with Zodiac Sign Finder.Discover your unique traits, seek guidance, and explore cosmic compatibility. Your journey to self-discovery begins here.</h2>
          </div>
          <DatePickerInput />
          <div className='button__container'>
            {/* <button className='primary-red-btn primary-red-btn font_500'>Find Your Zodiac Sign</button> */}

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className='  primary-red-btn primary-red-btn font_500'>Find Your Zodiac Sign</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className='detail-dialog border-none'>
                {/* Add the "open" prop here to make it open by default */}
                <h2 className='text-center font_600'>
                  Your Zodiac Sign Is
                  <br /> <span className='red'> CAPRICORN</span>
                </h2>

                <div className='dialog_division_container'>
                  <div className='detail_dialog__model--left'>
                    <Image src={CapricornZodiac} alt='circle of zodiac sign' />
                  </div>

                  <div className='detail_dialog__model--left'>bla</div>
                </div>

                <AlertDialogFooter>
                  <AlertDialogAction className='primary-red-btn primary-red-btn font_500'>exit</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </section>

      <section className='zodiac_card__section'>
        <div className='zodiac_card__container container'>
          <div className='zodiac_cards'>
            <Image src={AriesZodiac} alt='Aries Zodiac Sign' />
            <div className='zodiac_card_right_division'>
              <h3 className='zodiac_card__heading font_700'>ARIES</h3>
              <p className='zodiac_card__desc font_400'>Energetic leader, daring, assertive.</p>
            </div>
          </div>
          <div className='zodiac_cards'>
            <Image src={CancerZodiac} alt='Cancer Zodiac Sign' />

            <div className='zodiac_card_right_division'>
              <h3 className='zodiac_card__heading font_700'>CANCER</h3>
              <p className='zodiac_card__desc font_400'> Nurturing, emotional, intuitive, home-loving.</p>
            </div>
          </div>
          <div className='zodiac_cards'>
            <Image src={GeminiZodiac} alt='Gemini Zodiac Sign' />

            <div className='zodiac_card_right_division'>
              <h3 className='zodiac_card__heading font_700'>GEMINI</h3>
              <p className='zodiac_card__desc font_400'>Adaptable, curious, communicative, versatile.</p>
            </div>
          </div>
          <div className='zodiac_cards'>
            <Image src={LeoZodiac} alt='Leo Zodiac Sign' />

            <div className='zodiac_card_right_division'>
              <h3 className='zodiac_card__heading font_700'>LEO</h3>
              <p className='zodiac_card__desc font_400'> Charismatic, confident, dramatic, ambitious.</p>
            </div>
          </div>
          <div className='zodiac_cards'>
            <Image src={TaurusZodiac} alt='Taurus Zodiac Sign' />

            <div className='zodiac_card_right_division'>
              <h3 className='zodiac_card__heading font_700'>TAURUS</h3>
              <p className='zodiac_card__desc font_400'>Reliable, patient, determined, practical.</p>
            </div>
          </div>
          <div className='zodiac_cards'>
            <Image src={VirgoZodiac} alt='Virgo Zodiac Sign' />
            <div className='zodiac_card_right_division'>
              <h3 className='zodiac_card__heading font_700'>VIRGO</h3>
              <p className='zodiac_card__desc font_400'>Detail-oriented, analytical, modest, diligent.</p>
            </div>
          </div>
          <div className='zodiac_cards'>
            <Image src={LibraZodiac} alt='Libra Zodiac Sign' />
            <div className='zodiac_card_right_division'>
              <h3 className='zodiac_card__heading font_700'>LIBRA</h3>
              <p className='zodiac_card__desc font_400'>Charming, diplomatic, sociable, harmonious.</p>
            </div>
          </div>
          <div className='zodiac_cards'>
            <Image src={ScorpioZodiac} alt='Scorpio Zodiac Sign' />
            <div className='zodiac_card_right_division'>
              <h3 className='zodiac_card__heading font_700'>SCORPIO</h3>
              <p className='zodiac_card__desc font_400'> Intense, determined, secretive, transformative.</p>
            </div>
          </div>
          <div className='zodiac_cards'>
            <Image src={SagitariusZodiac} alt='Sagitarius Zodiac Sign' />
            <div className='zodiac_card_right_division'>
              <h3 className='zodiac_card__heading font_700'>SAGITARIUS</h3>
              <p className='zodiac_card__desc font_400'>Optimistic, adventurous, philosophical, independent.</p>
            </div>
          </div>
          <div className='zodiac_cards'>
            <Image src={CapricornZodiac} alt='Capricorn Zodiac Sign' />
            <div className='zodiac_card_right_division'>
              <h3 className='zodiac_card__heading font_700'>CAPRICORN</h3>
              <p className='zodiac_card__desc font_400'> Ambitious, disciplined, responsible, patient.</p>
            </div>
          </div>
          <div className='zodiac_cards'>
            <Image src={AquariusZodiac} alt='Aquarius Zodiac Sign' />
            <div className='zodiac_card_right_division'>
              <h3 className='zodiac_card__heading font_700'>AQUARIUS</h3>
              <p className='zodiac_card__desc font_400'>Innovative, independent, humanitarian, eccentric.</p>
            </div>
          </div>
          <div className='zodiac_cards'>
            <Image src={PiscesZodiac} alt='Pisces Zodiac Sign' />
            <div className='zodiac_card_right_division'>
              <h3 className='zodiac_card__heading font_700'>PISCES</h3>
              <p className='zodiac_card__desc font_400'>Compassionate, artistic, empathetic, dreamy.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
