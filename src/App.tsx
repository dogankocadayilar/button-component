import Button from "./components/Button";
import { TbShoppingCartPlus } from "react-icons/tb";

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 p-8 justify-between gap-8">
      {/* Defaults */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-black place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Defaults</h1>
        <Button>Default</Button>
        <Button variant="text">Text</Button>
        <Button variant="outline">Outline</Button>
      </div>

      {/* Primary */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-blue-500 place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Primary</h1>
        <Button intent="primary">Default</Button>
        <Button variant="text" intent="primary">
          Text
        </Button>
        <Button variant="outline" intent="primary">
          Outline
        </Button>
      </div>

      {/* Secondary */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-slate-500 place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Secondary</h1>
        <Button intent="secondary">Default</Button>
        <Button variant="text" intent="secondary">
          Text
        </Button>
        <Button variant="outline" intent="secondary">
          Outline
        </Button>
      </div>

      {/* Danger */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-rose-500 place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Danger</h1>
        <Button intent="danger">Default</Button>
        <Button variant="text" intent="danger">
          Text
        </Button>
        <Button variant="outline" intent="danger">
          Outline
        </Button>
      </div>

      {/* ---------------Size Small------------------- */}

      {/* Defaults */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-black place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Defaults Small</h1>
        <Button size="sm">Default</Button>
        <Button size="sm" variant="text">
          Text
        </Button>
        <Button size="sm" variant="outline">
          Outline
        </Button>
      </div>

      {/* Primary */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-blue-500 place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Primary Small</h1>
        <Button size="sm" intent="primary">
          Default
        </Button>
        <Button size="sm" variant="text" intent="primary">
          Text
        </Button>
        <Button size="sm" variant="outline" intent="primary">
          Outline
        </Button>
      </div>

      {/* Secondary */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-slate-500 place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Secondary Small</h1>
        <Button size="sm" intent="secondary">
          Default
        </Button>
        <Button size="sm" variant="text" intent="secondary">
          Text
        </Button>
        <Button size="sm" variant="outline" intent="secondary">
          Outline
        </Button>
      </div>

      {/* Danger */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-rose-500 place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Danger Small</h1>
        <Button size="sm" intent="danger">
          Default
        </Button>
        <Button size="sm" variant="text" intent="danger">
          Text
        </Button>
        <Button size="sm" variant="outline" intent="danger">
          Outline
        </Button>
      </div>

      {/* ---------------Size Large------------------- */}

      {/* Defaults */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-black place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Defaults Large</h1>
        <Button size="lg">Default</Button>
        <Button size="lg" variant="text">
          Text
        </Button>
        <Button size="lg" variant="outline">
          Outline
        </Button>
      </div>

      {/* Primary */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-blue-500 place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Primary Large</h1>
        <Button size="lg" intent="primary">
          Default
        </Button>
        <Button size="lg" variant="text" intent="primary">
          Text
        </Button>
        <Button size="lg" variant="outline" intent="primary">
          Outline
        </Button>
      </div>

      {/* Secondary */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-slate-500 place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Secondary Large</h1>
        <Button size="lg" intent="secondary">
          Default
        </Button>
        <Button size="lg" variant="text" intent="secondary">
          Text
        </Button>
        <Button size="lg" variant="outline" intent="secondary">
          Outline
        </Button>
      </div>

      {/* Danger */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-rose-500 place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Danger Large</h1>
        <Button size="lg" intent="danger">
          Default
        </Button>
        <Button size="lg" variant="text" intent="danger">
          Text
        </Button>
        <Button size="lg" variant="outline" intent="danger">
          Outline
        </Button>
      </div>

      {/* ---------------Disable Shadow------------------- */}
      {/* Defaults */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-black place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Defaults Disable Shadow</h1>
        <Button disableShadow>Default</Button>
        <Button disableShadow variant="text">
          Text
        </Button>
        <Button disableShadow variant="outline">
          Outline
        </Button>
      </div>

      {/* Primary */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-blue-500 place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Primary Disable Shadow</h1>
        <Button disableShadow intent="primary">
          Default
        </Button>
        <Button disableShadow variant="text" intent="primary">
          Text
        </Button>
        <Button disableShadow variant="outline" intent="primary">
          Outline
        </Button>
      </div>

      {/* Secondary */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-slate-500 place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Secondary Disable Shadow</h1>
        <Button disableShadow intent="secondary">
          Default
        </Button>
        <Button disableShadow variant="text" intent="secondary">
          Text
        </Button>
        <Button disableShadow variant="outline" intent="secondary">
          Outline
        </Button>
      </div>

      {/* Danger */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-rose-500 place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Danger Disable Shadow</h1>
        <Button disableShadow intent="danger">
          Default
        </Button>
        <Button disableShadow variant="text" intent="danger">
          Text
        </Button>
        <Button disableShadow variant="outline" intent="danger">
          Outline
        </Button>
      </div>

      {/* ---------------Disabled------------------- */}
      {/* Defaults */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-black place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Defaults Disabled</h1>
        <Button disabled>Default</Button>
        <Button disabled variant="text">
          Text
        </Button>
        <Button disabled variant="outline">
          Outline
        </Button>
      </div>

      {/* Primary */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-blue-500 place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Primary Disabled</h1>
        <Button disabled intent="primary">
          Default
        </Button>
        <Button disabled variant="text" intent="primary">
          Text
        </Button>
        <Button disabled variant="outline" intent="primary">
          Outline
        </Button>
      </div>

      {/* Secondary */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-slate-500 place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Secondary Disabled</h1>
        <Button disabled intent="secondary">
          Default
        </Button>
        <Button disabled variant="text" intent="secondary">
          Text
        </Button>
        <Button disabled variant="outline" intent="secondary">
          Outline
        </Button>
      </div>

      {/* Danger */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-rose-500 place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Danger Disabled</h1>
        <Button disabled intent="danger">
          Default
        </Button>
        <Button disabled variant="text" intent="danger">
          Text
        </Button>
        <Button disabled variant="outline" intent="danger">
          Outline
        </Button>
      </div>

      {/* ---------------With Start Icon------------------- */}
      {/* Defaults */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-black place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Defaults With Start Icon</h1>
        <Button startIcon={TbShoppingCartPlus}>Default</Button>
        <Button startIcon={TbShoppingCartPlus} variant="text">
          Text
        </Button>
        <Button startIcon={TbShoppingCartPlus} variant="outline">
          Outline
        </Button>
      </div>

      {/* Primary */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-blue-500 place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Primary With Start Icon</h1>
        <Button startIcon={TbShoppingCartPlus} intent="primary">
          Default
        </Button>
        <Button startIcon={TbShoppingCartPlus} variant="text" intent="primary">
          Text
        </Button>
        <Button
          startIcon={TbShoppingCartPlus}
          variant="outline"
          intent="primary"
        >
          Outline
        </Button>
      </div>

      {/* Secondary */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-slate-500 place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Secondary With Start Icon</h1>
        <Button startIcon={TbShoppingCartPlus} intent="secondary">
          Default
        </Button>
        <Button
          startIcon={TbShoppingCartPlus}
          variant="text"
          intent="secondary"
        >
          Text
        </Button>
        <Button
          startIcon={TbShoppingCartPlus}
          variant="outline"
          intent="secondary"
        >
          Outline
        </Button>
      </div>

      {/* Danger */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-rose-500 place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Danger With Start Icon</h1>
        <Button startIcon={TbShoppingCartPlus} intent="danger">
          Default
        </Button>
        <Button startIcon={TbShoppingCartPlus} variant="text" intent="danger">
          Text
        </Button>
        <Button
          startIcon={TbShoppingCartPlus}
          variant="outline"
          intent="danger"
        >
          Outline
        </Button>
      </div>

      {/* ---------------With End Icon------------------- */}
      {/* Defaults */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-black place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Defaults With End Icon</h1>
        <Button endIcon={TbShoppingCartPlus}>Default</Button>
        <Button endIcon={TbShoppingCartPlus} variant="text">
          Text
        </Button>
        <Button endIcon={TbShoppingCartPlus} variant="outline">
          Outline
        </Button>
      </div>

      {/* Primary */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-blue-500 place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Primary With End Icon</h1>
        <Button endIcon={TbShoppingCartPlus} intent="primary">
          Default
        </Button>
        <Button endIcon={TbShoppingCartPlus} variant="text" intent="primary">
          Text
        </Button>
        <Button endIcon={TbShoppingCartPlus} variant="outline" intent="primary">
          Outline
        </Button>
      </div>

      {/* Secondary */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-slate-500 place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Secondary With End Icon</h1>
        <Button endIcon={TbShoppingCartPlus} intent="secondary">
          Default
        </Button>
        <Button endIcon={TbShoppingCartPlus} variant="text" intent="secondary">
          Text
        </Button>
        <Button
          endIcon={TbShoppingCartPlus}
          variant="outline"
          intent="secondary"
        >
          Outline
        </Button>
      </div>

      {/* Danger */}
      <div className="grid grid-cols-3 gap-8 text-center border p-5 border-rose-500 place-items-center rounded-lg">
        <h1 className=" col-span-3 text-2xl">Danger With End Icon</h1>
        <Button endIcon={TbShoppingCartPlus} intent="danger">
          Default
        </Button>
        <Button endIcon={TbShoppingCartPlus} variant="text" intent="danger">
          Text
        </Button>
        <Button endIcon={TbShoppingCartPlus} variant="outline" intent="danger">
          Outline
        </Button>
      </div>
    </div>
  );
}

export default App;
