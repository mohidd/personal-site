"use client";

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Home() {
    return (
        <div className="space-y-16 transition-colors duration-500 ease-in-out dark:bg-gray-900">
            <section className="bg-gray-200 dark:bg-gray-900 py-20 transition-colors duration-500 ease-in-out">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-5xl font-bold mb-4">Mohid Durrani</h1>
                        <p className="text-xl text-muted-foreground mb-6">
                            CS Student at the University of Michigan, Minor in Economics
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <Image
                            src="/img.jpg"
                            alt="Mohid"
                            width={400}
                            height={400}
                            className="rounded-full border-4 border-primary"
                        />
                    </div>
                </div>
            </section>

            <section id="education" className="container mx-auto px-4 pt-16 scroll-mt-16">
                <h2 className="text-3xl font-bold mb-8">Education</h2>
                <Card className="dark:bg-gray-800 transition-colors duration-500 ease-in-out">
                    <CardHeader>
                        <CardTitle>Bachelor of Science in Computer Science, Minor in Economics</CardTitle>
                        <CardDescription>University of Michigan, Expected Graduation: April 2026</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Relevant coursework: Data Structures & Algorithms, Web Systems, Software Engineering, Computer Security, Computer Organization, Data Analytics, Discrete Math, Probability & Statistics, Linear Algebra</p>
                    </CardContent>
                </Card>
            </section>

            <section id="experiences" className="container mx-auto px-4 pt-16 scroll-mt-16">
                <h2 className="text-3xl font-bold mb-8">Experience</h2>
                <div className="space-y-6">
                    <Card className="dark:bg-gray-800 transition-colors duration-500 ease-in-out">
                        <CardHeader>
                            <CardTitle>Research Assistant, Biomedical and Clinical Informations Lab</CardTitle>
                            <CardDescription>University of Michigan - Michigan Medicine, Oct 2022 - May 2024</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside">
                                <li>Engineered a machine learning model in Python to predict cardiovascular disease onset for 3,500 patients, supporting clinical decision-making</li>
                                <li>Increased model accuracy to 78% through algorithm optimization and clinician validation</li>
                                <li>Optimized wearable technology for cardiac arrhythmia prediction, sponsored by Toyota</li>
                                <li>Applied signal processing and data cleaning techniques in MATLAB</li>
                                <li>Presented findings to 100+ attendees, demonstrating the impact of wearable technology in clinical settings</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="dark:bg-gray-800 transition-colors duration-500 ease-in-out">
                        <CardHeader>
                            <CardTitle>Executive Board Member</CardTitle>
                            <CardDescription>Muslim Engineering Society at Michigan, Aug 2024 - Present</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside">
                                <li>Collaborated with 5+ vendors and organizations to enhance event quality and engagement</li>
                                <li>Organized events like study tables, resume workshops, and Leetcode review sessions</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="dark:bg-gray-800 transition-colors duration-500 ease-in-out">
                        <CardHeader>
                            <CardTitle>Student Leader</CardTitle>
                            <CardDescription>Michigan Research and Discovery Scholars, Aug 2023 - Present</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside">
                                <li>Led weekly Data Structures & Algorithms study sessions, boosting project grades by 15%</li>
                                <li>Mentored 7 first-year engineering students in time management and academic skills</li>
                                <li>Organized 5+ community events with over 100 attendees, fostering diversity and inclusion</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section id="projects" className="container mx-auto px-4 pt-16 scroll-mt-16">
                <h2 className="text-3xl font-bold mb-8">Projects</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="dark:bg-gray-800 transition-colors duration-500 ease-in-out">
                        <CardHeader>
                            <CardTitle>Instagram Clone</CardTitle>
                            <CardDescription>Full-stack web application similar to Instagram</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">Technologies used: Flask, React, HTML, CSS, JavaScript</p>
                        </CardContent>
                    </Card>
                    <Card className="dark:bg-gray-800 transition-colors duration-500 ease-in-out">
                        <CardHeader>
                            <CardTitle>AI-Powered Drone</CardTitle>
                            <CardDescription>Voice-activated AI system for seamless drone control</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">Technologies used: TensorFlow, Dart, Flutter</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section id="contact" className="container mx-auto px-4 pt-16 scroll-mt-16">
                <h2 className="text-3xl font-bold mb-8">Contact</h2>
                <div className="flex justify-center space-x-6">
                    <a href="https://github.com/mohidd" target="_blank" rel="noopener noreferrer">
                        <Github className="w-8 h-8" />
                    </a>
                    <a href="https://linkedin.com/in/mohid-d" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-8 h-8" />
                    </a>
                    <a href="mailto:mohidd@umich.edu">
                        <Mail className="w-8 h-8" />
                    </a>
                </div>
            </section>
        </div>
    )
}