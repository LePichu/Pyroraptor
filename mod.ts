export interface Options {
    name: string
    version: string
    description: string
}

export function Metadata(opt: Options) {
    // deno-lint-ignore no-explicit-any
    return function(target: any) {
        const t = new target(opt)
        if(t instanceof CLI) {
            t.run()
        }
    }
}

export class CLI {
    private commands: string[] = []
    protected metadata: Options
    
    constructor(opt: Options) {
        this.metadata = opt
    }

    run() {
        if(!~this.commands.indexOf(Deno.args[0])) {
            console.log("command not found")
        }
    }

    test() {
        console.log(this.metadata?.name, this.metadata?.version, this.metadata?.description)
    }
}
