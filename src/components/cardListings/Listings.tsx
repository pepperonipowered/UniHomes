import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import spiels from '@/lib/constants/spiels';


export default function Listings() {
    return (
        <Card className="h-auto flex flex-col">
            <CardHeader>
                <img src="https://via.placeholder.com/250x250" className="h-1/2 w-full object-cover rounded-t-md box-border border-4 border-black" alt="" />
            <CardTitle>Create project</CardTitle>
            <CardDescription className='box-border border-4 border-black'>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
            <p>Description</p>
            </CardContent>
            <CardFooter>
            <Button>{spiels.BUTTON_VIEW}</Button>
            </CardFooter>
        </Card>     
    );
}