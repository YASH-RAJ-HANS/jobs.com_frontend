/**
 * v0 by Vercel.
 * @see https://v0.dev/t/41ftqy6gr1o
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/Label"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/Button"

export default function ApplicationForm() {
  return (
    <Card className="w-full max-w-md border border-gray-300 rounded m-11 p-10">
      <CardHeader>
        <CardTitle className="text-2xl">Apply for Required Position</CardTitle>

        <CardDescription>Fill out the form below to apply</CardDescription>
        <br />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1 mb-4">
          <Label htmlFor="name">Full Name</Label>
          <br/>
          <Input id="name" placeholder="Enter your full name" required />
        </div>
        <div className="space-y-1 mb-4">
          <Label htmlFor="email">Email</Label>
          <br/>
          <Input id="email" placeholder="Enter your email" required />
        </div>
        <div className="space-y-1 mb-4">
          <Label htmlFor="phone">Phone</Label>
          <br />
          <Input id="phone" placeholder="Enter your phone number" required />
        </div>
        <div className="space-y-1 mb-4">
          <Label htmlFor="address">Location</Label>
          <br />
          <Input id="address" placeholder="Enter your location" required />
        </div>
        <div className="space-y-1 mb-4">
          <Label htmlFor="website">Website/Portfolio</Label>
          <br />
          <Input id="website" placeholder="Enter your website or portfolio" />
        </div>
        <div className="space-y-1 mb-4">
          <Label htmlFor="resume">Resume</Label>
          <br />
          <Input accept=".pdf,.doc,.docx" id="resume" required type="file" />
          <p className="text-sm text-gray-500 dark:text-gray-400">Please upload your resume in PDF or Word format.</p>
        </div>
      </CardContent>
      <CardContent className="space-y-4">
        {/* <div className="space-y-2">
          <Label>Work Experience</Label>
          <div className="grid gap-2">
            <Input id="job1" placeholder="Job Title" required />
            <Input id="company1" placeholder="Company" required />
            <div className="grid gap-2 md:grid-cols-2">
              <Input id="start1" placeholder="Start Date" required type="date" />
              <Input id="end1" placeholder="End Date" required type="date" />
            </div>
            <Textarea id="description1" placeholder="Job Description" required />
          </div>
        </div> */}
      </CardContent>
      <CardContent className="space-y-4">
        {/* <div className="space-y-2">
          <Label>Education</Label>
          <div className="grid gap-2">
            <Input id="university" placeholder="University" required />
            <Input id="degree" placeholder="Degree" required />
            <Input id="field" placeholder="Field of Study" required />
            <Input id="graduation" placeholder="Graduation Year" type="number" />
          </div>
        </div> */}
      </CardContent>
      <CardContent className="space-y-4">
        {/* <div className="space-y-2">
          <Label>Skills</Label>
          <div className="grid gap-2">
            <Checkbox id="html" value="html">
              HTML
            </Checkbox>
            <Checkbox id="css" value="css">
              CSS
            </Checkbox>
            <Checkbox id="js" value="js">
              JavaScript
            </Checkbox>
            <Checkbox id="react" value="react">
              React
            </Checkbox>
            <Checkbox id="next" value="next">
              Next.js
            </Checkbox>
          </div>
        </div> */}
      </CardContent>
      <CardContent className="space-y-4">
        <div className="space-y-1 mb-4">
          <Label htmlFor="cover-letter">Cover Letter</Label>
          <br />
          <Textarea id="cover-letter" placeholder="Enter your cover letter" required />
        </div>
      </CardContent>
      <CardFooter className="flex justify-left">
        <Button type="submit" className="bg-black p-2 rounded text-white">Submit Application</Button>
      </CardFooter>
    </Card>
  )
}
