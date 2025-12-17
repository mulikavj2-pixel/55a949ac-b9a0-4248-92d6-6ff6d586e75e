"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardEleven from '@/components/sections/testimonial/TestimonialCardEleven';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBaseSocial from '@/components/sections/footer/FooterBaseSocial';
import { Facebook, Instagram, MapPin, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="large"
      background="none"
      cardStyle="floating"
      primaryButtonStyle="outline"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Brew Haven"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765964658283-utry2azq.jpg"
          logoAlt="Brew Haven Coffee"
          navItems={[
            { name: "Home", id: "home" },
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Beans", id: "beans" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Visit Us", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Perfectly Crafted Coffee"
          description="Discover premium, single-origin coffee roasted fresh daily. Experience the art and science of exceptional coffee."
          tag="Premium Coffee Experience"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765964666988-ed5396er.jpg"
          imageAlt="Brew Haven coffee shop background"
          buttons={[
            { text: "Explore Menu", href: "menu" },
            { text: "Learn Our Story", href: "about" }
          ]}
          showDimOverlay={false}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Roasted with Passion"
          description="At Brew Haven, we believe that great coffee starts with great beans. We source the finest single-origin beans from sustainable farms around the world and roast them in-house to bring out their unique flavors. Every cup tells a story of craftsmanship, dedication, and love for the perfect brew."
          tag="Our Story"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765964666988-ed5396er.jpg"
          imageAlt="Brew Haven coffee shop interior"
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Visit Our Shop", href: "contact" }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <FeatureCardEight
          title="The Coffee Journey"
          description="From bean selection to your cup - discover how we create exceptional coffee"
          tag="Our Process"
          features={[
            {
              id: 1,
              title: "Sourcing",
              description: "We partner with ethical farms worldwide to select the finest single-origin beans"
            },
            {
              id: 2,
              title: "Roasting",
              description: "Small-batch roasting brings out the unique flavor profile of each bean"
            },
            {
              id: 3,
              title: "Brewing",
              description: "Expert baristas craft each cup with precision and care"
            },
            {
              id: 4,
              title: "Enjoying",
              description: "Savor the perfect cup in our welcoming and cozy environment"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="beans" data-section="beans">
        <ProductCardOne
          title="Premium Coffee Beans"
          description="Explore our curated selection of specialty coffee beans from around the world"
          tag="Featured Selections"
          products={[
            {
              id: "1",
              name: "Ethiopian Highlands",
              price: "$16/bag",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765964676525-ojjlyyxg.jpg",
              imageAlt: "Ethiopian Highlands beans"
            },
            {
              id: "2",
              name: "Colombian Dark Roast",
              price: "$14/bag",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765964665676-3f3ajeen.jpg",
              imageAlt: "Colombian dark roast beans"
            },
            {
              id: "3",
              name: "Brazilian Santos",
              price: "$13/bag",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765964665676-3f3ajeen.jpg",
              imageAlt: "Brazilian Santos beans"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEleven
          title="What Coffee Lovers Say"
          description="Join our community of satisfied customers who have discovered their perfect cup"
          tag="Testimonials"
          testimonials={[
            {
              id: "1",
              nameTitle: "Sarah Mitchell, Coffee Enthusiast",
              quote: "Brew Haven has completely transformed my morning routine. The quality and freshness of their beans is unmatched. Every cup tastes like a journey through origin.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765964670283-ajywdya3.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              nameTitle: "James Chen, Restaurant Owner",
              quote: "We switched to Brew Haven for our café and our customers immediately noticed the difference. The consistency and quality have elevated our entire operation.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765964671734-5d4yn23t.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              nameTitle: "Maria Rodriguez, Home Barista",
              quote: "The baristas here taught me so much about coffee. Now I brew at home using their beans and techniques. Best decision ever made.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765964673309-qt2mfttq.jpg",
              imageAlt: "Maria Rodriguez"
            },
            {
              id: "4",
              nameTitle: "David Thompson, Regular Customer",
              quote: "I've been coming here for two years and the experience just keeps getting better. It's more than coffee - it's a community and a passion.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765964675096-a6p8kwez.jpg",
              imageAlt: "David Thompson"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Visit Our Coffee Shop"
          ctaDescription="Experience the perfect cup and meet our passionate baristas"
          ctaButton={{ text: "Get Directions", href: "contact" }}
          ctaIcon={MapPin}
          faqs={[
            {
              id: "1",
              title: "What are your operating hours?",
              content: "Monday-Friday: 6am-8pm, Saturday-Sunday: 7am-9pm. We are closed on major holidays."
            },
            {
              id: "2",
              title: "Do you offer wholesale or bulk orders?",
              content: "Yes, we offer wholesale pricing for businesses and bulk orders for special events. Contact us at wholesale@brewhaven.com for details."
            },
            {
              id: "3",
              title: "Can I order beans online?",
              content: "Absolutely! We offer online ordering with local delivery and shipping options. Visit our online store to browse our complete selection."
            },
            {
              id: "4",
              title: "Do you offer coffee brewing classes?",
              content: "Yes, we host monthly barista workshops and home brewing classes. Check our schedule or contact us to reserve your spot."
            }
          ]}
          useInvertedBackground="noInvert"
          animationType="slide-up"
          showCard={true}
          accordionAnimationType="smooth"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseSocial
          logoText="Brew Haven"
          description="Crafting exceptional coffee through passion, precision, and sustainable sourcing. Join us for the perfect cup."
          copyrightText="© 2025 Brew Haven Coffee. All rights reserved."
          columns={[
            {
              title: "Shop",
              items: [
                { label: "Coffee Beans", href: "beans" },
                { label: "Equipment", href: "beans" },
                { label: "Gift Cards", href: "contact" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "about" },
                { label: "Careers", href: "contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQ", href: "contact" },
                { label: "Shipping Info", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}