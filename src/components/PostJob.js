/**
 * v0 by Vercel.
 * @see https://v0.dev/t/41ftqy6gr1o
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/Button";

export default function PostJob() {
  return (
    <Card className="w-full max-w-md border border-gray-300 rounded m-11 p-6">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Post a New Job</CardTitle>

        {/* <CardDescription>Fill out the form below to apply</CardDescription> */}
        <br />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1 mb-4">
          <Label htmlFor="name">Role</Label>
          <br />
          <Input
            id="name"
            placeholder="Enter the job role"
            required
            className="w-96"
          />
        </div>
        <CardContent className="space-y-4">
          <div className="space-y-1 mb-4">
            <Label htmlFor="cover-letter">Description</Label>
            <br />
            <Textarea
              className="min-h-[150px] w-96 border-2 border-gray-400 focus:outline-none focus:border-black p-1 rounded-md "
              id="cover-letter"
              placeholder="Enter the job description"
              required
            />
          </div>
        </CardContent>
        <div className="grid grid-cols-1 w-96 gap-2 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <br />
            <Input
              id="location"
              placeholder="Enter job location"
              required
              className="w-[100%]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-date">Last Date to apply</Label>
            <Input id="last-date" required type="date" />
          </div>
        </div>
        <br />
        <div className="space-y-2">
          <Label>Job Type</Label>
          <div className="space-x-2">
            <Label className="inline-block cursor-pointer" htmlFor="full-time">
              <Input
                className="mr-2"
                id="full-time"
                name="job-type"
                type="checkbox"
                value="full-time"
              />
              Full-time
            </Label>
            <Label className="inline-block cursor-pointer" htmlFor="part-time">
              <Input
                className="mr-2"
                id="part-time"
                name="job-type"
                type="checkbox"
                value="part-time"
              />
              Part-time
            </Label>
            <Label className="inline-block cursor-pointer" htmlFor="contract">
              <Input
                className="mr-2"
                id="contract"
                name="job-type"
                type="checkbox"
                value="contract"
              />
              Contract
            </Label>
            <Label className="inline-block cursor-pointer" htmlFor="internship">
              <Input
                className="mr-2"
                id="internship"
                name="job-type"
                type="checkbox"
                value="internship"
              />
              Internship
            </Label>
          </div>
        </div>
        <br />
        <div className="space-y-1 mb-4">
          <Label htmlFor="address">Batch Eligible</Label>
          <br />
          <Input
            id="address"
            placeholder="Enter your location"
            required
            className="w-96"
          />
        </div>
      </CardContent>
      <br />
      <CardFooter className="flex justify-left">
        <Button type="submit" className="bg-black p-2 rounded text-white w-96">
          Submit Application
        </Button>
      </CardFooter>
         
    </Card>
  );
}
