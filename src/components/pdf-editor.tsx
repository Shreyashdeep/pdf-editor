import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileText, Upload, Edit, Save, Trash, Plus, Type } from 'lucide-react'

export default function PDFEditor() {
  const [file, setFile] = useState<File | null>(null)
  const [pdfBase64, setPdfBase64] = useState<string | null>(null)
  const [pageCount, setPageCount] = useState(0)
  const [editOperations, setEditOperations] = useState<Array<any>>([])
  const [currentPage, setCurrentPage] = useState(0)
  const [text, setText] = useState('')
  const [textX, setTextX] = useState(50)
  const [textY, setTextY] = useState(50)

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile)
      const formData = new FormData()
      formData.append('pdf', selectedFile)

      try {
        const response = await fetch('http://localhost:3001/upload', {
          method: 'POST',
          body: formData,
        })
        const data = await response.json()
        setPdfBase64(data.pdfBase64)
        setPageCount(data.pageCount)
      } catch (error) {
        console.error('Error uploading PDF:', error)
        alert('Error uploading PDF')
      }
    } else {
      alert('Please select a valid PDF file.')
    }
  }

  const handleAddPage = () => {
    setEditOperations([...editOperations, { type: 'addPage', pageIndex: currentPage }])
    setPageCount(pageCount + 1)
    setCurrentPage(currentPage + 1)
  }

  const handleDeletePage = () => {
    if (pageCount > 1) {
      setEditOperations([...editOperations, { type: 'deletePage', pageIndex: currentPage }])
      setPageCount(pageCount - 1)
      if (currentPage === pageCount - 1) {
        setCurrentPage(currentPage - 1)
      }
    }
  }

  const handleAddText = () => {
    setEditOperations([...editOperations, { 
      type: 'addText', 
      pageIndex: currentPage, 
      text, 
      x: textX, 
      y: textY,
      fontSize: 12
    }])
  }

  const handleSaveChanges = async () => {
    if (!pdfBase64) return

    try {
      const response = await fetch('http://localhost:3001/edit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pdfBase64, editOperations }),
      })
      const data = await response.json()
      setPdfBase64(data.editedPdfBase64)
      setPageCount(data.pageCount)
      setEditOperations([])
    } catch (error) {
      console.error('Error saving changes:', error)
      alert('Error saving changes')
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-3xl font-bold mb-8">PDF Editor</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <Label htmlFor="pdf-upload">Upload PDF</Label>
            <div className="mt-2 flex items-center space-x-2">
              <Input 
                id="pdf-upload" 
                type="file" 
                accept=".pdf" 
                onChange={handleFileChange}
                className="w-full"
              />
              <Button size="icon">
                <Upload className="h-4 w-4" />
                <span className="sr-only">Upload PDF</span>
              </Button>
            </div>
          </div>
          
          {pdfBase64 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Editing Options</h2>
              <div className="flex space-x-2">
                <Button variant="outline" onClick={handleAddPage}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Page Below
                </Button>
                <Button variant="outline" onClick={handleDeletePage} disabled={pageCount <= 1}>
                  <Trash className="h-4 w-4 mr-2" />
                  Delete Page
                </Button>
              </div>
              <div className="space-y-2">
                <Input 
                  type="text" 
                  placeholder="Enter text" 
                  value={text} 
                  onChange={(e) => setText(e.target.value)} 
                />
                <div className="flex space-x-2">
                  <Input 
                    type="number" 
                    placeholder="X" 
                    value={textX} 
                    onChange={(e) => setTextX(Number(e.target.value))} 
                  />
                  <Input 
                    type="number" 
                    placeholder="Y" 
                    value={textY} 
                    onChange={(e) => setTextY(Number(e.target.value))} 
                  />
                </div>
                <Button variant="outline" onClick={handleAddText}>
                  <Type className="h-4 w-4 mr-2" />
                  Add Text
                </Button>
              </div>
              <Button className="w-full" onClick={handleSaveChanges}>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </div>
          )}
        </div>
        
        <div className="bg-muted p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Preview</h2>
          {pdfBase64 ? (
            <div className="aspect-[3/4] bg-white rounded-md flex items-center justify-center">
              <iframe 
                src={`data:application/pdf;base64,${pdfBase64}#page=${currentPage + 1}`} 
                width="100%" 
                height="100%" 
                className="rounded-md"
              />
            </div>
          ) : (
            <div className="aspect-[3/4] bg-muted-foreground/10 rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">Upload a PDF to see preview</p>
            </div>
          )}
          {pageCount > 0 && (
            <div className="mt-2 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Total pages: {pageCount}</p>
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                  disabled={currentPage === 0}
                >
                  Previous
                </Button>
                <span className="text-sm">{currentPage + 1} / {pageCount}</span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setCurrentPage(Math.min(pageCount - 1, currentPage + 1))}
                  disabled={currentPage === pageCount - 1}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}