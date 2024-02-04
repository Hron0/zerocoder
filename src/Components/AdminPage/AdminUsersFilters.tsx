import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/UI/popover";
import filtr from '@/assets/filtr.svg'
import sort from '@/assets/sort.svg'
import { Button } from "../UI/button";
import { Label } from "../UI/label";
import { Input } from "../UI/input";

const AdminUsersFilters = () => {

    return (
        <div className="w-full bg-white rounded-t-xl flex flex-row justify-start gap-6 pt-2 border-b-[3px]">
            <Popover > {/* Фильтр */}
                <PopoverTrigger asChild>
                    <Button variant="ghost" className="items-start">
                        <img src={filtr} alt="" width={20} />
                        Фильтр
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="grid gap-4">
                        <div className="space-y-2">
                            <h4 className="font-medium leading-none">Dimensions</h4>
                            <p className="text-sm text-muted-foreground">
                                Set the dimensions for the layer.
                            </p>
                        </div>
                        <div className="grid gap-2">
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="width">Width</Label>
                                <Input
                                    id="width"
                                    defaultValue="100%"
                                    className="col-span-2 h-8"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="maxWidth">Max. width</Label>
                                <Input
                                    id="maxWidth"
                                    defaultValue="300px"
                                    className="col-span-2 h-8"
                                />
                            </div>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
            <Popover > {/* Сортировка */}
                <PopoverTrigger asChild>
                    <Button variant="ghost" className="items-start">
                        <img src={sort} alt="" width={20} />
                        Фильтр
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="grid gap-4">
                        <div className="space-y-2">
                            <h4 className="font-medium leading-none">Dimensions</h4>
                            <p className="text-sm text-muted-foreground">
                                Set the dimensions for the layer.
                            </p>
                        </div>
                        <div className="grid gap-2">
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="width">Width</Label>
                                <Input
                                    id="width"
                                    defaultValue="100%"
                                    className="col-span-2 h-8"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="maxWidth">Max. width</Label>
                                <Input
                                    id="maxWidth"
                                    defaultValue="300px"
                                    className="col-span-2 h-8"
                                />
                            </div>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default AdminUsersFilters