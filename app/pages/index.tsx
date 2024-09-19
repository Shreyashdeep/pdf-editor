import PdfMerge from '../components/PdfMerge';
// import PdfSplit from '../components/PdfSplit';
// import PdfCompress from '../components/PdfCompress';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">PDF Editor</h1>
      <div className="space-y-8">
        <PdfMerge />
        {/* <PdfSplit /> */}
        {/* <PdfCompress /> */}
      </div>
    </div>
  );
}