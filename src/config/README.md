# Contact Configuration

This directory contains centralized configuration for contact information used throughout the 6ix City Immigration website.

## Usage

All contact information is now centralized in `contact.js`. To use it in any component:

```javascript
import contactInfo from '@/config/contact'

// Phone & WhatsApp
contactInfo.phone.display        // "+1 (647)-706-0054"
contactInfo.phone.raw            // "16477060054"
contactInfo.phone.tel            // "(647)706-0054"

// Office Phone
contactInfo.office.phone         // "(905) 866-4666"
contactInfo.office.tel           // "9058664666"
contactInfo.office.display       // "(905) 866-4666"

// Physical Address
contactInfo.address.street       // "18 Regan Rd. Unit 18"
contactInfo.address.city         // "Brampton"
contactInfo.address.province     // "Ontario"
contactInfo.address.country      // "Canada"
contactInfo.address.postalCode   // "" (add if available)
contactInfo.address.full         // "18 Regan Rd. Unit 18, Brampton, Ontario, Canada"
contactInfo.address.short        // "18 Regan Rd. Unit 18, Brampton"
contactInfo.address.googleMapsUrl // Google Maps link for directions

// Email
contactInfo.email.primary        // "6ixcityimmigration@gmail.com"
contactInfo.email.display        // "6ixCityImmigration@gmail.com" (capitalized)

// Social Media
contactInfo.social.whatsapp      // "https://wa.me/16477060054"
contactInfo.social.instagram     // "https://www.instagram.com/6ixcityimmigration/"
contactInfo.social.facebook      // "https://www.facebook.com/6ixcityimmigration"

// Business Hours
contactInfo.hours.weekday        // "9am to 5pm EST"
contactInfo.hours.availability   // "Monday to Friday"

// Response Times
contactInfo.response.email       // "24 hours"
contactInfo.response.whatsapp    // "quick reply"
```

## Example

```javascript
import contactInfo from '@/config/contact'

const ContactButton = () => {
  return (
    <a href={contactInfo.social.whatsapp}>
      Contact us on WhatsApp: {contactInfo.phone.display}
    </a>
  )
}
```

## Updating Contact Information

To update contact information site-wide, simply edit the values in `src/config/contact.js`. The changes will automatically propagate to all components using this configuration.

## Components Updated

The following components now use this centralized configuration:

- `src/layout/Footer/Footer.js`
- `src/layout/Footer/FooterTwo.js`
- `src/components/contact-us/ContactCard.js`
- `src/components/support/QuickSupport.js`
- `src/components/blogs/ProfileCard.js`
- `src/components/blogs/Blockquote.js`
- `src/components/help-center/HelpCenterDetails.js`
- `src/components/help-center/HelpCenterSingleDetails.js`
- `src/components/our-office/OurOffice.js`

## Benefits

✅ **Single source of truth** - Update contact info in one place  
✅ **Consistency** - No more mismatched phone numbers or emails  
✅ **Easy maintenance** - Change once, update everywhere  
✅ **Type safety** - IntelliSense support in modern editors  
✅ **No hardcoded values** - All contact data is centralized

