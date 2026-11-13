# 🍽️ TableFlow
### By Infinity Corp

**Smart Restaurant Booking & Management Platform with AI-Powered Table Occupancy Detection**

TableFlow is a modern restaurant booking and management platform designed to streamline restaurant operations through intelligent automation, real-time table monitoring, and seamless reservation management.

The platform connects restaurant administrators, waiters, and customers through a unified ecosystem featuring role-based authentication, restaurant management, table reservations, and AI-powered CCTV occupancy detection.

---

## 🚀 Project Overview

TableFlow aims to bridge the gap between traditional restaurant management and smart automation.

Customers can discover restaurants, check table availability, and reserve tables online. Restaurant administrators can manage employees, bookings, tables, and restaurant operations, while waiters can monitor assigned tables and manage customer seating.

The platform also aims to integrate AI-powered computer vision with CCTV cameras to automatically detect table occupancy and update availability in real time.

## ✨ Key Features

### 👤 Role-Based Authentication
- Common login system for all user roles.
- Secure authentication using Spring Security and JWT.
- Customer self-registration.
- Restaurant administrator registration.
- Waiter onboarding through administrator invitations.
- Role-based dashboard redirection and authorization.

### 🏢 Restaurant Administration
- Restaurant registration and verification.
- Restaurant profile management.
- Employee and waiter management.
- Table configuration and capacity management.
- Booking and reservation management.
- Restaurant analytics and reports.

### 🍽️ Customer Experience
- Browse registered restaurants.
- View restaurant details and available tables.
- Check table occupancy.
- Reserve tables based on date and time.
- Manage and cancel reservations.
- View booking history.

### 🧑‍🍳 Waiter Management
- Dedicated waiter dashboard.
- View assigned tables.
- Monitor live table occupancy.
- Manage customer seating.
- Update table service status.
- View upcoming reservations.

### 📹 AI-Powered CCTV Occupancy Detection
- CCTV camera integration.
- AI-based human detection using computer vision.
- Table-zone occupancy monitoring.
- Automatic occupied/vacant status updates.
- Real-time synchronization with restaurant dashboards.
- Manual waiter verification for detection accuracy.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| Tailwind CSS | UI styling |
| Java | Backend development |
| Spring Boot | REST API development |
| Spring Security | Authentication and authorization |
| JWT | Token-based authentication |
| MySQL | Relational database |
| Python | Computer vision service |
| OpenCV | Image processing |
| YOLO | Object detection |
| WebSocket | Real-time updates |
| Git & GitHub | Version control |

*Technologies represent the planned project architecture. Individual integrations will be implemented progressively.*

---

## 🏗️ System Architecture

```text
                 TABLEFLOW
              BY INFINITY CORP
                      |
           React + Tailwind CSS
                      |
               REST API Requests
                      |
             Spring Boot Backend
                      |
             Spring Security + JWT
                      |
       +--------------+--------------+
       |              |              |
    Customer         Admin         Waiter
       |              |              |
       +--------------+--------------+
                      |
                MySQL Database
                      |
              Occupancy Management
                      |
               Python AI Service
                      |
                OpenCV + YOLO
                      |
                 CCTV Cameras
```

---

## 👥 User Roles & Permissions

| Feature | Customer | Admin | Waiter |
|---|:---:|:---:|:---:|
| Browse restaurants | ✅ | ❌ | ❌ |
| Book tables | ✅ | ❌ | ❌ |
| Manage bookings | Own | All restaurant | Assigned |
| Manage employees | ❌ | ✅ | ❌ |
| Manage restaurant tables | ❌ | ✅ | Limited |
| Monitor occupancy | View | ✅ | ✅ |
| Manage restaurant profile | ❌ | ✅ | ❌ |
| View analytics | ❌ | ✅ | ❌ |

A separate Super Admin role manages platform-wide restaurant approvals and administration.

---

## 🗄️ Database Structure

The initial database design includes:

| Table | Description |
|---|---|
| users | Stores user account information |
| restaurants | Stores registered restaurant details |
| restaurant_employees | Maps employees to restaurants and roles |
| restaurant_tables | Stores table information and occupancy |
| bookings | Stores customer reservations |
| waiter_invitations | Manages waiter onboarding |
| cctv_devices | Stores camera configuration |
| occupancy_logs | Records table occupancy events |

### Table Occupancy States

- `AVAILABLE` – Table is vacant and available.
- `OCCUPIED` – Customer is currently seated.
- `RESERVED` – Table has an upcoming reservation.
- `CLEANING` – Table is being cleaned.
- `MAINTENANCE` – Table is temporarily unavailable.

Booking status and physical occupancy status are maintained separately.

---

## 📁 Project Structure

```text
tableflow/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       │   ├── auth/
│       │   ├── admin/
│       │   ├── waiter/
│       │   └── customer/
│       ├── layouts/
│       ├── services/
│       ├── hooks/
│       ├── context/
│       └── App.jsx
│
├── backend/
│   └── src/main/java/
│       └── com/infinity/tableflow/
│           ├── config/
│           ├── controller/
│           ├── service/
│           ├── repository/
│           ├── entity/
│           ├── dto/
│           ├── security/
│           └── exception/
│
├── ai-service/
│   ├── detection/
│   ├── occupancy/
│   └── main.py
│
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites

Make sure you have installed:

- Node.js and npm
- Java JDK 17 or later
- Maven
- MySQL
- Python 3.x (for AI service)

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/tableflow.git

cd tableflow
```

### 2. Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

### 3. Backend Setup

Configure your MySQL database and update `application.properties`.

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/tableflow

spring.datasource.username=YOUR_DB_USERNAME

spring.datasource.password=YOUR_DB_PASSWORD

spring.jpa.hibernate.ddl-auto=update
```

Run the Spring Boot application:

```bash
mvn spring-boot:run
```

### 4. AI Service Setup

```bash
cd ai-service

pip install -r requirements.txt

python main.py
```

*The AI service requires its camera integration, detection model, and configuration to be implemented.*

---

## 🔐 Security

TableFlow is designed with the following security considerations:

- Password hashing using BCrypt.
- JWT-based authentication.
- Role-based access control.
- Restaurant-level data isolation.
- Secure waiter invitation tokens.
- Backend validation of all booking requests.
- Protection against unauthorized API access.

---

## 🔮 Future Enhancements

- Online payment gateway integration.
- QR-code-based table check-in.
- AI-powered restaurant analytics.
- Smart table allocation.
- Automated reservation notifications.
- Multi-branch restaurant management.
- Advanced CCTV occupancy analytics.
- Customer feedback and rating system.
- Mobile application integration.

---

## 🎯 Project Goals

The primary objective of TableFlow is to build a scalable, intelligent, and user-friendly restaurant management ecosystem that reduces manual operations, improves table utilization, and enhances customer experience.

---

## 👨‍💻 Project Information

**Product Name:** TableFlow  
**Organization:** Infinity Corp  
**Category:** Full Stack Development / Smart Restaurant Management  
**Project Status:** In Development

---

## 📄 License

This project is currently under development. Licensing and distribution terms will be defined by Infinity Corp.

---

<p align="center">
  <strong>TableFlow by Infinity Corp</strong><br/>
  Smart Reservations. Intelligent Occupancy. Seamless Restaurant Management.
</p>