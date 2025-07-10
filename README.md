# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ✨ **Dynamic Home Page** - Profile, banner, intro with animations
- 📄 **About Me** - Personal info, skills, timeline, and stats
- 🚀 **Projects Page** - Filterable project showcase with individual project pages
- 📚 **Research Papers** - PDF viewer with categorization and search
- 📧 **Contact Form** - Functional contact form with validation
- 📱 **Mobile Responsive** - Optimized for all devices
- 🌙 **Dark Mode** - Toggle between light and dark themes
- ⚡ **Performance Optimized** - Built with Next.js 15 for optimal performance
- 🔍 **SEO Optimized** - Meta tags, structured data, and more

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

1. **Update personal details** in the following files:
   - `/src/app/layout.tsx` - Meta tags and site title
   - `/src/app/page.tsx` - Hero section content
   - `/src/app/about/page.tsx` - About page content
   - `/src/components/Footer.tsx` - Footer information

2. **Replace placeholder images**:
   - Add your profile photo to `/public/images/`
   - Update image paths in the components

### Projects

1. **Edit project data** in `/src/data/projects.json`
2. **Add project images** to `/public/images/`
3. **Update project URLs** to point to your actual projects

### Research Papers

1. **Edit research data** in `/src/data/research.json`
2. **Add PDF files** to `/public/papers/`
3. **Update PDF URLs** in the JSON file

### Contact Form

The contact form includes a basic API route at `/src/app/api/contact/route.ts`. For production use, you'll want to integrate with a service like:

- **Formspree** - Easy form handling
- **Resend** - Email API service
- **SendGrid** - Email delivery platform
- **Nodemailer** - SMTP email sending

### Styling

The project uses Tailwind CSS for styling. You can customize:

- **Colors**: Update the color palette in `tailwind.config.ts`
- **Fonts**: Change fonts in `/src/app/layout.tsx`
- **Components**: Modify component styles in individual files

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- **Netlify**
- **Railway**
- **DigitalOcean App Platform**
- **AWS Amplify**

## Environment Variables

For the contact form to work in production, you may need to set up environment variables:

```bash
# .env.local
RESEND_API_KEY=your_resend_api_key
FORMSPREE_FORM_ID=your_formspree_form_id
```

## File Structure

```
portfolio/
├── public/
│   ├── images/          # Profile and project images
│   ├── papers/          # Research paper PDFs
│   └── resume.pdf       # Your resume
├── src/
│   ├── app/
│   │   ├── about/       # About page
│   │   ├── contact/     # Contact page
│   │   ├── projects/    # Projects pages
│   │   ├── research/    # Research page
│   │   └── api/         # API routes
│   ├── components/      # React components
│   ├── data/           # JSON data files
│   └── ...
├── tailwind.config.ts   # Tailwind configuration
├── next.config.ts       # Next.js configuration
└── package.json
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have questions or need help customizing the portfolio, feel free to open an issue or reach out!

---

**Made with ❤️ and Next.js**
