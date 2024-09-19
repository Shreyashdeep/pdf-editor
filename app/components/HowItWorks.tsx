import React, { useState } from 'react';
import { uploadPDF } from '../services/api';
import PDFUpload from './PDFUpload';

export default function HowItWorks() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            How It Works
          </h2>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white">1</div>
              <h3 className="text-xl font-bold">Upload</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Select and upload your PDF file to our secure platform.</p>
              <PDFUpload /> {/* Added PDFUpload component */}
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white">2</div>
              <h3 className="text-xl font-bold">Edit</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Use our intuitive tools to make the necessary changes to your PDF.</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white">3</div>
              <h3 className="text-xl font-bold">Download</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Save your edited PDF and download it to your device.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }