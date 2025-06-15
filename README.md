# Ascend Stay Website

A modern, responsive website for Ascend Stay - a premium short-term rental management company.

## 🚀 Features

- **Mobile-first responsive design** - Optimized for all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Performance optimized** - Fast loading with optimized images and code splitting
- **Accessible** - WCAG compliant with proper semantic HTML
- **SEO ready** - Optimized meta tags and structure

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **SASS** - Advanced CSS with variables and mixins
- **Framer Motion** - Smooth animations and transitions
- **React Hook Form** - Efficient form handling with validation

## 📦 Installation

1. **Clone the repository:**

```bash
git clone <repository-url>
cd ascend-stay-website
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm run dev
```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎨 Color Scheme

- **Primary (Navy Ink):** #1F2A44
- **Secondary (Warm Taupe):** #C7B7A3
- **Accent (Brass):** #D6A84A
- **Neutral-Dark:** #3A3A3A
- **Neutral-Light:** #FAFAFA
- **Success:** #29A36C
- **Error:** #CE3A30

## 📧 Contact Form Implementation

### Current Implementation

The contact form is currently set up with:

- **Client-side validation** using React Hook Form
- **TypeScript interfaces** for type safety
- **Error handling** and success/error states
- **Responsive design** with proper accessibility

### Form Data Structure

```typescript
interface FormData {
  name: string; // Required, min 2 characters
  email: string; // Required, valid email format
  phone: string; // Required, min 10 digits
  message: string; // Required, min 10 characters
}
```

### Backend Integration Options

To make the contact form functional, you can integrate with any of these services:

#### 1. **EmailJS** (Recommended for simple setup)

```bash
npm install @emailjs/browser
```

```typescript
// In Contact.tsx, replace the onSubmit function:
import emailjs from "@emailjs/browser";

const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);

  try {
    await emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        message: data.message,
      },
      "YOUR_PUBLIC_KEY"
    );

    setSubmitStatus("success");
    reset();
  } catch (error) {
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};
```

#### 2. **Formspree** (Form backend service)

```typescript
const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);

  try {
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSubmitStatus("success");
      reset();
    } else {
      setSubmitStatus("error");
    }
  } catch (error) {
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};
```

#### 3. **Netlify Forms** (If hosted on Netlify)

Add to the form element:

```html
<form name="contact" method="POST" data-netlify="true"></form>
```

#### 4. **Custom Backend API**

```typescript
const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSubmitStatus("success");
      reset();
    } else {
      setSubmitStatus("error");
    }
  } catch (error) {
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};
```

## 📱 Responsive Breakpoints

- **Mobile:** Up to 576px
- **Tablet:** 577px - 768px
- **Desktop:** 769px - 1200px
- **Large Desktop:** 1201px+

## 🚀 Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set up form handling if using Netlify Forms

### Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect Vite and build the project

### Traditional Hosting

1. Build the project: `npm run build`
2. Upload the contents of the `dist` folder to your web server

## 📂 Project Structure

```
src/
├── components/
│   ├── Header/
│   ├── Hero/
│   ├── About/
│   ├── WhyLease/
│   ├── GuaranteedIncome/
│   ├── Benefits/
│   └── Contact/
├── styles/
│   ├── variables.scss
│   └── globals.scss
├── App.tsx
└── main.tsx
```

## 🔧 Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the component to `App.tsx`
3. Create corresponding SCSS file for styling

### Modifying Colors

Update the color variables in `src/styles/variables.scss`

### Adding Images

1. Add images to `src/assets/` or use external URLs
2. Update image sources in components
3. Consider using webp format for better performance

## 📝 License

This project is created for Ascend Stay. All rights reserved.

## 🤝 Support

For questions or support regarding this website, please contact the development team.
