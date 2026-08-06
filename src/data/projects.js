import apexGaming from "../assets/project/apexGaming/apexGaming.png";
import brewSpace from "../assets/project/brewSpace/brewSpace.png";
import inverntoryManagement from "../assets/project/inventoryManagement/inventoryManagement.jpeg";
import serviceDesk from "../assets/project/serviceDesk/serviceDesk.jpeg";
import admin from "../assets/project/POSSelfService/admin.png"; 
import POSCoffeShop from "../assets/project/POSCoffeShop/POSCoffeShop.png";



export const projects = [
    {
        id : 1,
        repo : "POS Self-Service Coffe Shop",
        desc : "A web-based self-service ordering system designed for coffee shops",
        img  : admin,
        tech : ["React", "Tailwind CSS", "Supabase"],
        role : "Backend Developer",
        url  : null,
        github : "https://github.com/trigusf/POS-SelfServices-CoffeShop"

    },
    {
        id : 2,
        repo : "Point Of Sales Coffe Shop",
        desc : "A desktop-based Point of Sale (POS) application built with JavaFX to streamline coffee shop operations.",
        img  : POSCoffeShop,
        tech : ["Java", "MySQL"],
        role : "Backend Developer",
        url  : null,
        github : "https://github.com/trigusf/POS-CoffeShop"
    },
    {
        id : 3,
        repo : "Apex Gaming E-commerce",
        desc : "Modern gaming ecommerce landing page built with Tailwind CSS and JavaScript.",
        img  : apexGaming,
        tech : ["Tailwind CSS", "JavaScript"],
        role : "Frontend Developer",
        url  : "https://apexGaming.vercel.app",
        github : "https://github.com/trigusf/ApexGaming"
    },
    {
        id : 4,
        repo : "Inventory Management System",
        desc : "A web-based inventory management system designed to streamline stock tracking, manage incoming & outgoing goods, and generate accurate real-time reports.",
        img  : inverntoryManagement,
        tech : ["php", "JavaScript", "MySQL"],
        role : "FullStack Developer",
        url  : null,
        github : "https://github.com/trigusf/persediaan-barang"
    },
    {
        id : 5,
        repo : "Service Desk - Ticketing system",
        desc : "An internal service desk application built with Laravel 10 and Tailwind CSS to track, manage, and resolve inter-team support tickets.",
        img  : serviceDesk,
        tech : ["Laravel", "JavaScript", "MySQL", "Tailwind CSS"],
        role : "Frontend Developer - intern",
        url  : null,
        github : null,
    },
    {
        id : 6,
        repo : "BrewSpace Coffe Shop",
        desc : "Modern responsive Coffee Shop landing page built with HTML, Tailwind CSS, and AOS animation.",
        img  : brewSpace,
        tech : ["Tailwind CSS", "JavaScript"],
        role : "Frontend Developer",
        url  : "https://brew-space.vercel.app",
        github : "https://github.com/trigusf/BrewSpace"
    },
]