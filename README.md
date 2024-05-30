# Personal-Website

Hey there,

I'm Raam. This is the source code for my developer portfolio. You can run it locally by:

1. Cloning this repo

2. cd to `Personal-Website` in your terminal or shell and then run `npm install`

3. Run `npm install` and then copy-paste `http://localhost:5173/` into your browser (Chrome, Firefox, Safari, ...)

Or feel free to view it at: **REPLACE WITH URL**

This is a work in progress - feel free to check back in occasionally for new projects or updates.

# Updates
05/30/2024
- I'm planning some restructuring. My vision is that different sections will have different scenes. I'd like to also continue using the Scroll Controls from drei, and each scene will likely have a different number of 'pages'.

- A context seems like an appropriate use case for this, as the SectionNav will need it to jump from section to section and track it, and the overarching Experience component will need to know what number of pages (maybe via a prop, or something) to feed the <ScrollControls />.

- For restructuring, I'll likely need to separate each Section into a respective Scene component, which contains the appropriate meshes, materials, textures, etc., and then a separate component which has the HTML stuff. Scroll Controls seems to do a good job of tying these two things together when fed the appropriate number of pages.








**PLEASE READ**
If you decide to use my project as a template for your own, or build upon it, a few things:

1. Thank you - that's a huge compliment!
2. I'd appreciate a shout out in the readME, or somewhere within your project.
3. Please fork the repo instead of directly cloning it. 
4. Please submit issues if you see anything in the base template that seems buggy or poorly designed.

